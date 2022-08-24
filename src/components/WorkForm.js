/* eslint-disable react/prop-types */
import React from 'react'

const WorkForm = (props) => {
  const { company, title, tasks, startDate, endDate, onSubmit, handleOnChange } = props
  return (
    <div className='eduForm'>
      <form onSubmit={onSubmit} name='workSaved'>
        <label htmlFor='company'>Company:</label>
        <input onChange={handleOnChange} value={company} type='text' name='company' />
        <label htmlFor='title'>Title:</label>
        <input onChange={handleOnChange} value={title} type='text' name='title' />
        <label htmlFor='tasks'>Tasks:</label>
        <textarea onChange={handleOnChange} value={tasks} name='tasks' rows='10' cols='30' />
        <label htmlFor='startDate'>Start Date:</label>
        <input onChange={handleOnChange} value={startDate} type='date' name='startDate' />
        <label htmlFor='endDate'>End Date:</label>
        <input onChange={handleOnChange} value={endDate} type='date' name='endDate' />
        <div className='buttons'>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default WorkForm
