import React from 'react'
import { connect } from 'react-redux'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import RegistrationForm from './RegistrationForm';
import RegistrationTable from './RegistrationTable'

import { persistRegistrations } from '../actions'

const styles = theme => ({
    button: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    }
})

function RegistrationPage(props) {
    const { classes, persistRegistrations, registrations } = props;
    const handleSave = () => {
        persistRegistrations(registrations)
    }
    return (
        <div>
            <RegistrationForm />
            <RegistrationTable />
            <Button 
                variant="fab" 
                color="primary" 
                aria-label="Save" 
                className={ classes.button }
                onClick={ handleSave }>
                <SaveIcon />
            </Button>
        </div>
    )
}

function mapStateToProps({ registrations }) {
    return { registrations }
   }
  
  export default connect(
    mapStateToProps, { persistRegistrations }
  )(withStyles(styles)(RegistrationPage))