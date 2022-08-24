/* eslint-disable react/prop-types */
const WorkInfo = (props) => {
  const { company, title, tasks, startDate, endDate, handleEdit } = props
  return (
    <div className='workInfo info'>
      <div className='company'>
        <p>Company Name:</p>
        {company}
      </div>
      <div className='title'>
        <p>Job Title:</p>
        {title}
      </div>
      <div className='tasks'>
        <p>Tasks:</p>
        {tasks}
      </div>
      <div className='startDate'>
        <p>Start Date:</p>
        {startDate}
      </div>
      <div className='endDate'>
        <p>End Date:</p>
        {endDate}
      </div>
      <div className='buttons'>
        <button className='editButton' type='button' onClick={handleEdit} name='workSaved'>
          Edit
        </button>
      </div>
    </div>
  )
}

export default WorkInfo
