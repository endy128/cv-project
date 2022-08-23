const ContactInfo = (props) => {
  const {fullName, email, phone, handleEdit} = props;
  return ( 
    <div className="contactInfo">
      <div className="fullName">Name: {fullName}</div>
      <div className="email">Email: {email}</div>
      <div className="phone">Phone: {phone}</div>
      <div className="buttons">
        <button
          className="editButton"
          type="button"
          onClick={handleEdit}
          name="contactSaved"
          >Edit
        </button>
      </div>
    </div>
   );
}
 
export default ContactInfo;