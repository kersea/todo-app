function CheckListItem({
  toDoId,
  toDoMessage,
  toDoStatus,
  handleCheckboxClick,
}) {
  return (
    <>
      {" "}
      <input
        onClick={() => handleCheckboxClick(toDoId)}
        type="checkbox"
        checked={toDoStatus}
        id={toDoId}
        name={toDoId}
      />
      <label htmlFor={toDoId}>{toDoMessage}</label>
      <br></br>
    </>
  );
}

export default CheckListItem;
