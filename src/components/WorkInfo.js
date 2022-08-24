const WorkInfo = (props) => {
  const {company, title, tasks, startDate, endDate, handleEdit} = props;
  return ( 
    <div className="workInfo">
      <div className="company">Company Name: {company}</div>
      <div className="title">Job Title: {title}</div>
      <div className="tasks">Tasks: {tasks}</div>
      <div className="startDate">Start Date: {startDate}</div>
      <div className="endDate">End Date: {endDate}</div>
      <div className="buttons">
        <button
          className="editButton"
          type="button"
          onClick={handleEdit}
          name="workSaved"
          >Edit
        </button>
      </div>
    </div>
   );
}
 
export default WorkInfo;