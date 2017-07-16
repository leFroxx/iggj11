import React, {Component} from 'react';
import {connect} from 'react-redux';

import { StartScreen } from '.';
import CardComponent from '../components/Card';
import CardData from '../models/Card';
import { appActions } from '../actions';

class Credits extends Component {
    render() {
        const { goBack } = this.props;
        const cardData = new CardData("attack_1");

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
                <CardComponent category={cardData.getCategory()} title="Entlassung" />
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
