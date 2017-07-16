import React, {Component} from 'react';
import {connect} from 'react-redux';

import { StartScreen } from '.';
import CardComponent from '../components/Card';
import { appActions } from '../actions';

class Credits extends Component {
    render() {
        const { goBack } = this.props;

        return (
            <div className="credits">
                <h1>Credits</h1>
                <ul>
                    <li className="game-designer">Kevin Krüger</li>
                    <li className="development">Philipp Runge</li>
                    <li className="development">Heike Paierl</li>
                    <li className="graphic-artist">Julius Walther</li>
                </ul>
                <button onClick={goBack}>Zurück</button>
                <CardComponent type={"declinement"} />
                <CardComponent type={"attack_9"} />
                <CardComponent type={"agreement"} />
                <CardComponent type={"offer_raise"} />
                <CardComponent type={"declinement"} />
                <CardComponent type={"offer_bonus"} />
            </div>
        )
    }
}
Credits.id = "credits";

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {
        goBack: () => appActions.changeView(dispatch)(StartScreen.id),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Credits);
