import { useEffect, useState, useContext } from "react";
import MainContext from "../_helpers/contexts/mainContext";
import { DataGridEx } from "../_components/DataGridEx/DataGridEx";
import { Column, SearchPanel } from "devextreme-react/data-grid";
import { TaskType } from "../Types/TaskType";
import { taskList } from "./taskList";
import { AddTaskPopup } from "./AddTaskPopup";
import renderAssignCell from "./renderAssignCell";

const HomePage = () => {
  const [addTaskPopupVisible, setAddTaskPopupVisble] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskType[]>();
  const { step, setStep } = useContext(MainContext);

  useEffect(() => {
    setTasks(taskList);
    if (setStep) setStep("step0");
  }, []);

  const addTask = (task: TaskType) => {
    if (tasks) setTasks([...tasks, task]);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <AddTaskPopup
            visible={addTaskPopupVisible}
            setVisible={setAddTaskPopupVisble}
            listLength={tasks?.length}
            addTask={addTask}
          />
          <DataGridEx
            id="gridContainer"
            selection={{ mode: "single" }}
            dataSource={tasks}
            showBorders={true}
            hoverStateEnabled={true}
            gridTitle="Task list"
            plusFunction={() => setAddTaskPopupVisble(true)}
          >
            <SearchPanel visible={true} />
            <Column dataField="work_order_id" caption="WO ID" />
            <Column dataField="description" caption="Description" />
            <Column
              dataField="received_date"
              caption="Received date"
              dataType="datetime"
            />
            <Column
              dataField="assigned_to"
              caption="Assigned to"
              cellRender={renderAssignCell}
            />
            <Column dataField="status" caption="Status" />
            <Column dataField="priority" caption="Priority" />
          </DataGridEx>
        </div>
      </div>
    </>
  );
};

export { HomePage };
