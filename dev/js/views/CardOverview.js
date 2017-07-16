import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    MatchNegotiation,
    MatchDispute,
    PlayerChange
} from '.';
import {
    appActions,
    cardActions
} from '../actions';
import {
    Card,
    ProgressBar
} from '../components';
import { config, l } from '../tools';

class CardOverview extends Component {
    render() {
        const { type, playCard, cancel } = this.props;

        return (
            <div className={"card-overview"}>
                <Card type={type} />
                <div className="buttons">
                    <button onClick={playCard}>Karte spielen</button>
                    <button onClick={cancel}>Abbrechen</button>
                </div>
            </div>
        )
    }
}
CardOverview.id = "card_overview";

function mapStateToProps(state) {
    const type = state.app.displayedCard;

    return {
        type
    };
}

function mapDispatchToProps(dispatch){
    return dispatch((dispatch, getState) => {
        const viewHistory = getState().app.viewHistory;
        const proviousView = viewHistory[viewHistory.length-2];
        return {
            playCard: () => {
                cardActions.playDisplayedCard(dispatch)();
                appActions.changeView(dispatch)(PlayerChange.id);
            },
            cancel: () => appActions.changeView(dispatch)(proviousView)
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOverview);
