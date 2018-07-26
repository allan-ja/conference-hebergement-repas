import React from 'react'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import RegistrationForm from './RegistrationForm';
import RegistrationTable from './RegistrationTable'

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
    const { classes } = props;
    return (
        <div>
            <RegistrationForm />
            <RegistrationTable />
            <div>
            <Button variant="fab" color="primary" aria-label="Save" className={ classes.button }>
                <SaveIcon />
            </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(RegistrationPage)