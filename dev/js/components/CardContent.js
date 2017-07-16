import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardModel from '../models/Card';

import { appActions } from '../actions';


class CardContent extends Component {
    render() {
        const { model, category } = this.props;

        let renderedContent;
        switch (category) {
            case "attack":
                renderedContent = renderAttackContent(model);
                break;
            case "agreement":
                renderedContent = renderAgreementContent(model);
                break;
            case "offer_main":
                renderedContent = renderOfferMainContent(model);
                break;
            case "offer_secondary":
                renderedContent = renderOfferSecondaryContent(model);
                break;
            case "declinement":
                renderedContent = renderDeclinementContent(model);
                break;
            default:
                renderedContent = renderDefaultContent(model);
        }

        return renderedContent;
    }
}

function renderAttackContent(model) {
    return (
        <div className="card-content attack">
            <div className="attack-bar">
                <div className="damage-value">-12</div>
                <div className="damage-type">Motivation</div>
            </div>
            <div className="attack-bar">
                <div className="damage-value">-10</div>
                <div className="damage-type">Finanzen</div>
            </div>
        </div>
    )
}

function renderAgreementContent(model) {
    return (
        <div>
            Agreement
        </div>
    )
}

function renderOfferMainContent(model) {
    return (
        <div>
            Offer Main
        </div>
    )
}

function renderOfferSecondaryContent(model) {
    return (
        <div>
            Offer Secondary
        </div>
    )
}

function renderDeclinementContent(model) {
    return (
        <div>
            Declinement
        </div>
    )
}

function renderDefaultContent(model) {
    return (
        <div>
            Default
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(CardContent);
