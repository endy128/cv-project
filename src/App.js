import React, {Component} from "react";
import uniqid from "uniqid";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import EduForm from "./components/EduForm";
import EduInfo from "./components/EduInfo";


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
        eduSaved: false,
        workSaved: false,
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //       id: uniqid()
    // });
    this.setState({
      [e.target.name]: true
    })
  };

  handleEdit = (e) => {
    this.setState({
      [e.target.name]: false
    })
  }

  renderContact = () => {
    const {fullName, email, phone, contactSaved} = this.state;
    let textToRender = '';
    if (contactSaved === true) {
      textToRender = 
      <ContactInfo
      fullName={fullName} 
      email={email} 
      phone={phone} 
      handleEdit={this.handleEdit}
      />
    } else if (contactSaved === false) {
      textToRender = 
      <ContactForm 
      fullName={fullName} 
      email={email} 
      phone={phone} 
      handleOnChange={this.handleOnChange} 
      onSubmit={this.onSubmit} 
      />
    } 
    return textToRender;
  }

  renderEdu = () => {
    const {school, course, graduation, eduSaved} = this.state;
    let textToRender = '';
  
    if (eduSaved === true) {
      textToRender =
      <EduInfo
      school={school}
      course={course}
      graduation={graduation}
      handleOnChange={this.handleOnChange} 
      handleEdit={this.handleEdit}
      />
    } else if ( eduSaved === false) {
      textToRender =
      <EduForm
      school={school}
      course={course}
      graduation={graduation}
      handleOnChange={this.handleOnChange} 
      onSubmit={this.onSubmit} 
      />
    }
    return textToRender;
  }

  render () {
    return (
      <div>
        {this.renderContact()}
        {this.renderEdu()}
      </div>
      )

  }

}

export default App;
