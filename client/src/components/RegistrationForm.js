import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import * as actions from '../actions';


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

class RegistrationForm extends React.Component {

  onRegistrationSubmit = (values) => {
    const newEntry = { ...values, toSave: true}
    this.props.addRegistration(newEntry)
  }

  render() {
    const { classes, handleSubmit, pristine, submitting } = this.props
    return (
      <Paper className={classes.root}>
        <form onSubmit={handleSubmit(this.onRegistrationSubmit)}>
          <Grid className={classes.form}>
          <div>
            <Field
              name="firstName"
              component={renderTextField}
              label="First Name"
              classes={classes.textField}
            />
          </div>
          <div>
            <Field name="lastName" component={renderTextField} label="Last Name" />
          </div>
          <div>
            <Field name="email" component={renderTextField} label="Email" />
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
  actions
)(reduxForm({
    form: 'RegistrationForm'
  })(withStyles(styles)(RegistrationForm)))