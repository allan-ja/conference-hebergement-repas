import React from 'react'
import { connect } from 'react-redux'
import ActivityForm from './ActivityForm'
import ActivityTable from './ActivityTable'
import ButtonSave from '../ButtonSave'

import { persistActivities } from '../../actions'


function ActivityContainer(props) {
    const handleSave = () => {
        const actToSave = activities.filter(function (act) {
            return act.toSave
          })
        persistActivities(actToSave)
    }
    const { persistActivities, activities } = props
    
    
    return (
        <div>
            <ActivityForm />
            <ActivityTable />
            <ButtonSave handleClick={handleSave}/>
        </div>
    )
}

function mapStateToProps({ activities }) {
    return { activities }
   }
  

export default connect(mapStateToProps, { persistActivities })(ActivityContainer)