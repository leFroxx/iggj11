import React, {Component} from 'react';
import {connect} from 'react-redux';
require('../scss/style.scss');

import {
    StartScreen,
    MatchGoals
} from './views';

class App extends Component {
    render() {
        const {activeViewId} = this.props;
        let activeView = null;
        switch (activeViewId) {
            case StartScreen.id:
                activeView = <StartScreen />
                break;
            case MatchGoals.id:
                activeView = <MatchGoals />
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
       activeViewId: state.activeView.id
   };
}

export default connect(mapStateToProps)(App);
