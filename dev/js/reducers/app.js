import StartScreen from '../views/StartScreen.js';
import { player } from '../models';

const defaultState = {
    activeView: StartScreen.id
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'APP_CHANGE_VIEW':
            return {
                ...state,
                activeView: action.data.view
            }
            break;
        case 'APP_INIT_PLAYERS':
            return {
                ...state,
                players: {
                    boss: action.data.boss,
                    worker: action.data.worker
                }
            }
            break;
    }
    return state;
}
