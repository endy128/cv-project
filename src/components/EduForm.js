import React from 'react'

const EduForm = (props) => {
  const { school, course, graduation, onSubmit, handleOnChange } = props
  return (
    <div className='eduForm'>
      <form onSubmit={onSubmit} name='eduSaved'>
        <label htmlFor='school'>School:</label>
        <input onChange={handleOnChange} value={school} type='text' name='school' />
        <label htmlFor='course'>Course:</label>
        <input onChange={handleOnChange} value={course} type='text' name='course' />
        <label htmlFor='graduation'>Graduation:</label>
        <input onChange={handleOnChange} value={graduation} type='date' name='graduation' />
        <div className='buttons'>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EduForm
