import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MatchGoals } from '.';
import { appActions } from '../actions';

class ProgressBar extends Component {
    render() {
        const { gotoMatchGoals, statType, progress } = this.props;

        return (
            <div className="progress-outline">
                <div className={"progress-bar " + statType} style={ {width: progress + "%"} }></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch){
    return {
        gotoMatchGoals: () => {
            dispatch(appActions.initPlayers());
            dispatch(appActions.changeView(MatchGoals.id));
        },
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ProgressBar);
