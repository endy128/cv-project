
const ContactForm = (props) => {
  const {fullName, email, phone, handleOnChange, onSubmitContact} = props;

  return (
    <div className="contactForm">
    <form onSubmit={onSubmitContact}>
      <label htmlFor="fullName">Name:</label>
        <input
          onChange={handleOnChange}
          value={fullName}
          type="text"
          name="fullName"
        />
      <label htmlFor="email">Email:</label>
        <input
          onChange={handleOnChange}
          value={email}
          type="email"
          name="email"
        />
      <label htmlFor="phone">Phone:</label>
        <input
          onChange={handleOnChange}
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

export default ContactForm