import { Button } from "devextreme-react/button";
import { DataGrid } from "devextreme-react";
import plus from "../../_assets/plus.png";

const DataGridEx = (props) => {
  return (
    <>
      <div className="gridTitle">
        {props.gridTitle}
        <Button icon={plus} className="gridButtonPlus" onClick={props.plusFunction}/>
      </div>
      <DataGrid {...props}>{props.children}</DataGrid>
    </>
  );
};

export { DataGridEx };
