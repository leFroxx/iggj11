import StartScreen from '../views/StartScreen.js';

import { Player } from '../models';

const defaultState = {
    boss: null,
    worker: null
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'PLAYERS_INIT':
            return {
                ...state,
                boss: action.data.boss,
                worker: action.data.worker
            }
        case 'CARD_ATTACK':
            return {
                ...state,
                activePlayer: action.data.activePlayer
            }
            break;
    }
    return state;
}
