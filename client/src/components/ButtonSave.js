import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

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

function ButtonSave(props) {
    const { classes, handleClick } = props
    return (
        <Button 
            variant="fab" 
            color="primary" 
            aria-label="Save" 
            className={ classes.button }
            onClick={ handleClick }
            >
            <SaveIcon />
        </Button>
    )
}


export default withStyles(styles)(ButtonSave)