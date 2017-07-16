import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    MatchNegotiation,
    MatchDispute
} from '.';
import { appActions } from '../actions';
import {
    Card,
    ProgressBar
} from '../components';
import { config, l } from '../tools';

class CardOverview extends Component {
    render() {
        const { type } = this.props;

        return (
            <div className={"card-overview"}>
                <Card type={type} />
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
    return {
        gotoStart: () => appActions.changeView(dispatch)(StartScreen.id),
        accept: () => null,
        reject: () => null,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOverview);
