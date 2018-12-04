import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

class ButtonHeader extends Component {
    render() {
        const { link, text } = this.props
        return (
            <Button 
                color="inherit" 
                component={Link} 
                to={ link }
            >   
                { text }
            </Button>
        )
    }
}

export default ButtonHeader