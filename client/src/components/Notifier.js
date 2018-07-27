import React from 'react';
import { connect } from 'react-redux'

import Toast from './Toast'


class Notifier extends React.Component {
    state = {
        open: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.notification.id > this.props.notification.id) {
            this.setState({
                open: true,
                ...nextProps.notification
            })
        }
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return ( 
                <Toast data={this.state} handleClose={this.handleClose}/>
        )
    }
}

function mapStateToProps({
    notification
}) {
    return {
        notification
    }
}

export default connect(mapStateToProps)(Notifier)