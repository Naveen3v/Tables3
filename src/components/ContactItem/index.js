import './index.css'

const ContactItem = props => {
  const {contactDetails} = props
  const {person, city, email, joiningDate, role} = contactDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{person.name}</p>
        <p>{person.avatar}</p>
      </div>

      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{city}</p>
        <hr className="separator" />
        <p className="email">{email}</p>
        <hr className="separator" />
        <p className="mobile-no-value">{joiningDate}</p>
        <hr className="separator" />
        <p className="mobile-no-value">{role}</p>
      </div>
    </li>
  )
}

export default ContactItem
