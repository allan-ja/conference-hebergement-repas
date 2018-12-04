import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { addActivity } from '../../actions'


const flex = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-evenly'
}

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 3}px auto`,
    padding: theme.spacing.unit * 2
  },
  form: {
    ...flex,
    container: true,
    marginBottom: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  }
})

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    {...input}
    {...custom}
  />
)

class ActivityForm extends React.Component {

  onActivitySubmit = (values) => {
    const newEntry = { ...values, toSave: true}
    this.props.addActivity(newEntry)
  }

  render() {
    const { classes, handleSubmit, pristine, submitting } = this.props
    return (
      <Paper className={classes.root}>
        <form onSubmit={handleSubmit(this.onActivitySubmit)}>
          <Grid className={classes.form}>
            <div>
                <Field
                name="name"
                component={renderTextField}
                label="Name"
                classes={classes.textField}
                />
            </div>
            <div>
                <Field 
                name="description" 
                component={renderTextField} 
                label="Description"
                />
            </div>       
          </Grid>
          <Grid className={classes.form}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
              disabled={pristine || submitting}
            >
              ADD
            </Button>
          </Grid>
        </form>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return { state }
 }

export default connect(
  mapStateToProps,
  { addActivity }
)(reduxForm({
    form: 'ActivityForm'
  })(withStyles(styles)(ActivityForm)))