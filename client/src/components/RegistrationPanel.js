import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

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

class RegistrationPanel extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    data: [
      {
        id: 1,
        firstname: 'Alice',
        lastname: 'Smith',
        email: 'alice@gmail.com'
      }
    ]
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.firstname || this.state.lastname || this.state.email) {
      this.setState(({ firstname, lastname, email, data }) => ({
        data: [
          ...data,
          {
            firstname,
            lastname,
            email,
            id: Date.now()
          }
        ],
        firstname: '',
        lastname: '',
        email: ''
      }))
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Grid className={classes.form}>
            <TextField
              label="First Name"
              value={this.state.firstname}
              classes={classes.textField}
              onChange={this.handleChange('firstname')}
            />
            <TextField
              label="Last Name"
              value={this.state.lastname}
              classes={classes.textField}
              onChange={this.handleChange('lastname')}
            />
            <TextField
              label="Email"
              value={this.state.email}
              classes={classes.textField}
              onChange={this.handleChange('email')}
            />
          </Grid>
          <Grid className={classes.form}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(RegistrationPanel)
