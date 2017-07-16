import React, {Component} from 'react';
import {connect} from 'react-redux';

import { CardContent } from '.';
import { appActions } from '../actions';


class Card extends Component {
    render() {
        const { category, title, icon } = this.props;

        return (
            <div className={"card" + category}>
                <div className={"header" + category}>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className="circle"></div>
                </div>
                <div className="content">
                    <CardContent />
                </div>
                <div className="icon">
                    {icon}
                </div>
            </div>
        )
            <div className="progress-outline">
                <div className={"progress-bar " + statType} style={ {width: progress + "%"} }></div>
            </div>
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
            // dispatch(appActions.changeView(MatchGoals.id));
        },
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Card);
