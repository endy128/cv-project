import React, { Component } from 'react'

class renderContact extends Component {
render () {
  return (
    <div className="contactForm">
    <form onSubmit={this.onSubmitGeneral}>
      <label htmlFor="name">Name:</label>
        <input
          onChange={this.handleOnChange}
          value={name}
          type="text"
          name="name"
        />
      <label htmlFor="email">Email:</label>
        <input
          onChange={this.handleOnChange}
          value={email}
          type="email"
          name="email"
        />
      <label htmlFor="phone">Phone:</label>
        <input
          onChange={this.handleOnChange}
          value={phone}
          type="tel"
          name="phone"
        />

      <div className="buttons">
        <button type="button">Edit</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}
}

export default renderContact