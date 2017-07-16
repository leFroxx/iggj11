import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    Match
} from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';

class MatchNegotiation extends Component {
    render() {
        return (
            <Match phase="negotiation" />
        )
    }
}
MatchNegotiation.id = "match_negotiation";

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchNegotiation);
