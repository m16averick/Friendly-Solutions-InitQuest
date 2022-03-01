import React, { useReducer, FC } from "react";
import { PopupEx } from "../_components/PopupEx/PopupEx";
import { FormField } from "../_components/FormField/FormField";
import { TextBox, DateBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { TaskType } from "../Types/TaskType";
import ValidationEngine from "devextreme/ui/validation_engine";
import notify from "devextreme/ui/notify";

import {
  Validator,
  RequiredRule,
} from "devextreme-react/validator";

interface IAddProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  listLength?: number;
  addTask: (task: TaskType) => void;
}

const initialState = {
  description: "",
  received_date: "",
  status: "",
  priority: "",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "toggle_remember":
      return {
        ...state,
        remember: !state.remember,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const AddTaskPopup: FC<IAddProps> = ({
  visible,
  setVisible,
  listLength,
  addTask,
}: IAddProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validationGroup = "AddContractor";
  const validate = () => {
    let { brokenRules } = ValidationEngine.validateGroup(validationGroup);
    if (brokenRules && brokenRules.length > 0) {
      notify("Uzupełnij wymagane pola!", "error");
      return false;
    }
    return true;
  };
 
  const save = () => {
    if (validate()) {
      let id;
      if (listLength) id = 1 + listLength;
      let task = {
        work_order_id: id,
        description: state.description,
        received_date: state.received_date,
        status: state.status,
        priority: state.priority,
      } as TaskType;
      dispatch({ type: "reset" });
      setVisible(false);
      addTask(task);
    }
  };
  const handleContentReady = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <FormField
          label={"Description"}
          input={
            <TextBox
              width="250"
              value={state.description}
              onValueChanged={(e) => {
                dispatch({
                  type: "update_input",
                  value: e.value,
                  key: "description",
                });
              }}
            >
              <Validator validationGroup={validationGroup}>
                <RequiredRule message="Description is required" />
              </Validator>
            </TextBox>
          }
        />
        <FormField
          label={"Received date"}
          input={
            <DateBox
              width="250"
              value={state.received_date}
              onValueChanged={(e) => {
                dispatch({ type: "update_input", value: e.value, key: "received_date" });
              }}
            >
              <Validator validationGroup={validationGroup}>
                <RequiredRule message="Received date is required" />
              </Validator>
            </DateBox>
          }
        />
        <FormField
          label={"Status"}
          input={
            <TextBox
              width="250"
              value={state.status}
              onValueChanged={(e) => {
                dispatch({ type: "update_input", value: e.value, key: "status" });
              }}
            >
              <Validator validationGroup={validationGroup}>
                <RequiredRule message="Status is required" />
              </Validator>
            </TextBox>
          }
        />
        <FormField
          label={"Priority"}
          input={
            <TextBox
              width="250"
              value={state.priority}
              onValueChanged={(e) => {
                dispatch({ type: "update_input", value: e.value, key: "priority" });
              }}
            >
              <Validator validationGroup={validationGroup}>
                <RequiredRule message="Priority is required" />
              </Validator>
            </TextBox>
          }
        />
      </div>
    );
  };
  const popupButtons = () => {
    return (
      <Button
        text="Zapisz"
        type="success"
        stylingMode="contained"
        className="btnPrimary"
        onClick={() => save()}
      />
    );
  };
  return (
    <>
      <PopupEx
        visible={visible}
        onHiding={() => {
          dispatch({ type: "reset" });
          setVisible(false);
        }}
        content={handleContentReady()}
        width="600"
        height="auto"
        title="Add task"
        buttons={popupButtons()}
      />
    </>
  );
};

export { AddTaskPopup };
