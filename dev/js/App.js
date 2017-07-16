import React, {Component} from 'react';
import {connect} from 'react-redux';
require('../scss/style.scss');

import {
    StartScreen,
    Credits,
    PlayerChange,
    MatchGoals,
    Match,
    CardOverview
} from './views';
import { playerActions } from './actions';

class App extends Component {
    componentWillMount() {
        this.props.init();
    }
    render() {
        const {activeViewId} = this.props;
        let activeView = null;
        switch (activeViewId) {
            case StartScreen.id:
                activeView = <StartScreen />
                break;
            case Credits.id:
                activeView = <Credits />
                break;
            case PlayerChange.id:
                activeView = <PlayerChange />
                break;
            case MatchGoals.id:
                activeView = <MatchGoals />
                break;
            case Match.id:
                activeView = <Match />
                break;
                break;
            case CardOverview.id:
                activeView = <CardOverview />
                break;
            default:
        }
        return (
            <div id="app">
                {activeView}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeViewId: state.app.activeView
    };
}

function mapDispatchToProps(dispatch) {
    return {
        init: () => {
            playerActions.initPlayers(dispatch)();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
