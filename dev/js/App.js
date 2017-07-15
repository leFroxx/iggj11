import React, {Component} from 'react';
import {connect} from 'react-redux';
require('../scss/style.scss');

import {appActions} from './actions';

class App extends Component {
    render() {
        return (
            <div id="app">
                {this.props.activeView}
            </div>
        );
    }
}

function mapStateToDispatch(dispatch) {
    console.log(appActions);
    return {
        // changeView: appActions.changeView(2)
    }
}

function mapStateToProps(state) {
   return {
       activeView: state.activeView
   };
}

export default connect(mapStateToDispatch, mapStateToProps)(App);
