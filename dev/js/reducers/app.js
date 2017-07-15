import StartScreen from '../views/StartScreen.js';

const defaultState = {
    activeView: localStorage.getItem('activeView') || StartScreen.id,
    activePlayer: null,
    players: [],
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'APP_CHANGE_VIEW':
            localStorage.setItem('activeView', action.data.view);
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
        case 'APP_SET_ACTIVE_PLAYER':
            return {
                ...state,
                activePlayer: action.data.activePlayer
            }
            break;
    }
    return state;
}
