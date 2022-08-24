const ContactInfo = (props) => {
  const {fullName, email, phone, handleEdit} = props;
  return ( 
    <div className="contactInfo info">
      <div className="fullName"><p>Name:</p>{fullName}</div>
      <div className="email"><p>Email:</p>{email}</div>
      <div className="phone"><p>Phone:</p>{phone}</div>
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