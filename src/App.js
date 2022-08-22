import React, {Component} from "react";
import uniqid from "uniqid";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";


class App extends Component {
  constructor() {
    super();

    this.state = {
        id: uniqid(),
        fullName: '',
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
        contactSaved: false,
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitContact = (e) => {
    e.preventDefault();
    this.setState({
          id: uniqid()
    });
    this.setState({
      contactSaved: true
    })
  };

  RenderContact = () => {
    const { fullName, email, phone, contactSaved } = this.state;
    if (contactSaved === true) {
      return (
        <ContactInfo
        fullName={fullName} 
        email={email} 
        phone={phone} 
        />
      )
    }
    return (
      <ContactForm 
      fullName={fullName} 
      email={email} 
      phone={phone} 
      handleOnChange={this.handleOnChange} 
      onSubmitContact={this.onSubmitContact} 
      />
    )
  }

  render () {
    // const { fullName, email, phone } = this.state;
    return (
      <this.RenderContact />
    )
  }

}

export default App;
