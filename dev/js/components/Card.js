import React, {Component} from 'react';
import {connect} from 'react-redux';

import { appActions } from '../actions';


class Card extends Component {
    render() {
        const { category, title, icon } = this.props;

        return (
            <div className={`card ${category}`}>
                <div className={`header ${category}`}>
                    <div className="title">
                        {title}
                    </div>
                    <div className="circle"></div>
                </div>
                <div className={`circle ${category}`}></div>
                <div className="content">
                    {/* <CardContent /> */}
                </div>
                <div className="icon">
                    {icon}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {
        gotoMatchGoals: () => {
            dispatch(appActions.initPlayers());
            // dispatch(appActions.changeView(MatchGoals.id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
