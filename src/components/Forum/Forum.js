import React, { Component } from 'react'
import './Forum.css'

class Forum extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="ForumItems">
            </nav>
        )
    }
}

export default Forum
