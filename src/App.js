import {Component} from 'react'

import ContactItem from './components/ContactItem'

import ContactItem2 from './components/ContactItem2'

import ContactItem3 from './components/ContactItem3'

import './App.css'

const contactsList = [
  {
    person: {
      name: 'Prerna Jha',
      avatar: 'profile.jpg',
    },
    city: 'Mumbai',
    email: 'prernajha@gmail.com',
    joiningDate: '12/02/2018',
    role: 'UI Designer',
  },
  {
    person: {
      name: 'Rukmini Pandit',
      avatar: 'profile.jpg',
    },
    city: 'Delhi',
    email: 'rukminipandit@gmail.com',
    joiningDate: '09/02/2022',
    role: 'Front-end Developer',
  },
  {
    person: {
      name: 'Nandhini Lingesh',
      avatar: 'profile.jpg',
    },
    city: 'Delhi',
    email: 'nandhinilingesh@gmail.com',
    joiningDate: '30/06/2019',
    role: 'UX Designer',
  },
  {
    person: {
      name: 'Ankit Singh',
      avatar: 'profile.jpg',
    },
    city: 'Kolkata',
    email: 'ankitsingh@gmail.com',
    joiningDate: '11/11/2017',
    role: 'Backend Developer',
  },
  {
    person: {
      name: 'Amith Kumar',
      avatar: 'profile.jpg',
    },
    city: 'Mumbai',
    email: 'amithkumar@gmail.com',
    joiningDate: '24/07/2020',
    role: 'Front-end Developer',
  },
  {
    person: {
      name: 'Shalini Singhla',
      avatar: 'profile.jpg',
    },
    city: 'Mumbai',
    email: 'shalinisinghla@gmail.com',
    joiningDate: '17/09/2017',
    role: 'UX Designer',
  },
  {
    person: {
      name: 'Abhishek Singh',
      avatar: 'profile.jpg',
    },
    city: 'Kolkata',
    email: 'abhisheksingh@gmail.com',
    joiningDate: '01/06/2017',
    role: 'Front-end Developer',
  },
]

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <ul className="contacts-table">
            <li className="table-header">
              <p className="name-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">City</p>
              <hr className="separator" />
              <p className="table-header-cell">Email Address</p>
              <hr className="separator" />
              <p className="table-header-cell">Joining Date</p>
              <hr className="separator" />
              <p className="table-header-cell">Role</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem key={eachContact.id} contactDetails={eachContact} />
            ))}
          </ul>
        </div>
        <div className="responsive-container">
          <ul className="contacts-table">
            <li className="table-header">
              <p className="name-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Email Address</p>
              <hr className="separator" />
              <p className="table-header-cell">Role</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem2 key={eachContact.id} contactDetails={eachContact} />
            ))}
          </ul>
        </div>
        <div className="responsive-container">
          <ul className="contacts-table">
            <li className="table-header">
              <p className="name-header-cell name-column">Email Address</p>

              <hr className="separator" />
              <p className="table-header-cell">Joining Date</p>
              <hr className="separator" />
              <p className="table-header-cell">Role</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem3 key={eachContact.id} contactDetails={eachContact} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
