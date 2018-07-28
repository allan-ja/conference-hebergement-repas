import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { fetchActivities } from '../actions'

class ActivityTable extends React.Component {
  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(this.props.activities || []).map(n => (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.description}</TableCell>
              </TableRow>
             ))} 
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

function mapStateToProps({ activities }) {

  return { activities }
 }

export default connect(
  mapStateToProps,
  { fetchActivities }
)(ActivityTable)
