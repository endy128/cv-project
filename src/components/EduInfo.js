const EduInfo = (props) => {
  const {school, course, graduation, handleEdit} = props;
  return ( 
    <div className="eduInfo info">
      <div className="school"><p>School:</p>{school}</div>
      <div className="course"><p>Course:</p>{course}</div>
      <div className="graduation"><p>Graduaution Date:</p>{graduation}</div>
      <div className="buttons">
        <button
          className="editButton"
          type="button"
          onClick={handleEdit}
          name="eduSaved"
          >Edit
        </button>
      </div>
    </div>
   );
}
 
export default EduInfo;