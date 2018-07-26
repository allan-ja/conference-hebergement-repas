import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { fetchRegistrations } from '../actions'

class RegistrationTable extends React.Component {
  componentDidMount() {
    this.props.fetchRegistrations()
  }
  
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(this.props.registrations || []).map(n => (
              <TableRow>
                <TableCell>{n.firstname}</TableCell>
                <TableCell>{n.lastname}</TableCell>
                <TableCell>{n.email}</TableCell>
              </TableRow>
             ))} 
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

function mapStateToProps({ registrations }) {
  return { registrations }
 }

export default connect(
  mapStateToProps,
  { fetchRegistrations }
)(RegistrationTable)
