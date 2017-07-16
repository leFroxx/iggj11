import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    Match
} from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';

class MatchDispute extends Component {
    render() {
        return (
            <Match phase="dispute" />
        )
    }
}
MatchDispute.id = "match_dispute";

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchDispute);
