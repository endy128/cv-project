import React, {Component} from "react";
import uniqid from "uniqid";
import renderContact from "./components/Contact";
import Contact from "./components/Contact";


class App extends Component {
  constructor() {
    super();

    this.state = {
        id: uniqid(),
        name: '',
        email: '',
        phone: '',
        school: '',
        course: '',
        graduation: '',
        company: '',
        title: '',
        tasks: '',
        startDate: '',
        endDate: '',
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
          id: uniqid(),
          name: '',
          email: '',
          phone: '',
    });
    console.table(this.state);
    renderContact(this.state);
  };

  render () {
    const { name, email, phone } = this.state;
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

export default App;
