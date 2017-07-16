import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardModel from '../models/Card';
import CardContent from './CardContent';

import { appActions } from '../actions';


class Card extends Component {
    render() {
        const { type } = this.props;

        const model = new CardModel(type);
        const category = model.getCategory();
        const title = model.getTitle();

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
                    <CardContent model={model}/>
                </div>
                <div className="icon">
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
