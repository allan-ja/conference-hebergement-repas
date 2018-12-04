import React from 'react'
import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import ButtonHeader from './ButtonHeader'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const activityButton = props => 
  <ButtonHeader 
    link='/activities' 
    text='Activity Manager' 
    {...props} 
  />

  const registrationButton = props => 
  <ButtonHeader 
    link='/' 
    text='Registration Manager' 
    {...props} 
  />


function Header(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            GHR
          </Typography>
          
          <Route exact path="/" component={activityButton} />
          <Route path="/activities" component={registrationButton} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
