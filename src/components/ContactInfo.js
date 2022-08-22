const ContactInfo = (props) => {
  const {fullName, email, phone} = props;
  return ( 
    <div className="contactInfo">
      <div className="fullName">{fullName}</div>
      <div className="email">{email}</div>
      <div className="phone">{phone}</div>
      <button type="button">Edit</button>
    </div>
   );
}
 
export default ContactInfo;