function gridCellData(gridData) {
  return gridData.data["assigned_to"];
}

export default function renderAssignCell(cellData) {
  let assigners = new Array();
  assigners = gridCellData(cellData);
  console.log(assigners);
  return (
    <>{assigners ? assigners.map((e) => <div>{e.person_name}</div>) : null}</>
  );
}
