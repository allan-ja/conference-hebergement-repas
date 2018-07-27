import React from 'react'
import { connect } from 'react-redux'
import RegistrationForm from './RegistrationForm';
import RegistrationTable from './RegistrationTable'
import ButtonSave from './ButtonSave'

import { persistRegistrations } from '../actions'

function RegistrationPage(props) {
    const { classes, persistRegistrations, registrations } = props;
    const handleSave = () => {
        persistRegistrations(registrations)
    }
    return (
        <div>
            <RegistrationForm />
            <RegistrationTable />
            <ButtonSave handleClick={handleSave}/>
        </div>
    )
}

function mapStateToProps({ registrations }) {
    return { registrations }
   }
  
  export default connect(
    mapStateToProps, { persistRegistrations }
  )(RegistrationPage)