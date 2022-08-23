const EduInfo = (props) => {
  const {school, course, graduation, handleEdit} = props;
  return ( 
    <div className="eduInfo">
      <div className="school">School: {school}</div>
      <div className="course">Course: {course}</div>
      <div className="graduation">Graduaution Date: {graduation}</div>
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