import './index.css'

const ContactItem = props => {
  const {contactDetails} = props
  const {person, city, email, joiningDate, role} = contactDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p className="email">{email}</p>
      </div>

      <div className="table-cell mobile-no-column">
        <hr className="separator" />
        <p className="mobile-no-value">{joiningDate}</p>
        <hr className="separator" />
        <p className="mobile-no-value">{role}</p>
      </div>
    </li>
  )
}

export default ContactItem
