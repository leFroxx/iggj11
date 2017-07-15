import React, {Component} from 'react';
import {connect} from 'react-redux';

class StartScreen extends Component {
    render() {
        return (
            <div>
                <h1>Arbeitskampf</h1>
                <button>Start</button>
                <button>Credits</button>
            </div>
        )
    }
}
StartScreen.id = 0;

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        // user: state.activeUser
    };
}

export default connect(mapStateToProps)(StartScreen);
