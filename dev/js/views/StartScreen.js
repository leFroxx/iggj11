import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MatchGoals } from '.';
import { appActions } from '../actions';

class StartScreen extends Component {
    render() {
        const { gotoMatchGoals } = this.props;
        return (
            <div>
                <h1>Arbeitskampf</h1>
                <button onClick={gotoMatchGoals}>Start</button>
                <button>Credits</button>
            </div>
        )
    }
}
StartScreen.id = "start_screen";

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch){
    return {
        gotoMatchGoals: () => dispatch(appActions.changeView(MatchGoals.id)),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(StartScreen);
