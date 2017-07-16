import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardModel from '../models/Card';
import CardContent from './CardContent';

import { appActions } from '../actions';


class Card extends Component {
    render() {
        const { type, onClick } = this.props;

        const model = new CardModel(type);

        let visualCategory;
        switch (model.getCategory()) {
            case "attack":
                visualCategory = "attack";
                break;
            case "agreement":
                visualCategory = "agreement";
                break;
            case "offer_main":
                visualCategory = "offer_main";
                break;
            case "offer_secondary":
                visualCategory = "offer_secondary";
                break;
            default:
                visualCategory = "default";
        }

        const title = model.getTitle();

        return (
            <div className={`card ${visualCategory}`} onClick={onClick} >
                <div className={`header ${visualCategory}`}>
                    <div className="title">
                        {title}
                    </div>
                    <div className="circle"></div>
                </div>
                <div className={`circle ${visualCategory}`}></div>
                <div className="content">
                    <CardContent model={model} category={visualCategory}/>
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
