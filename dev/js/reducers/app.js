import StartScreen from '../views/StartScreen.js';

const defaultState = {
    activeView: StartScreen.id,
    // activeView: localStorage.getItem('activeView') || StartScreen.id,
    activePlayer: null,
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'APP_SET_ACTIVE_VIEW':
            localStorage.setItem('activeView', action.data.view);
            return {
                ...state,
                activeView: action.data.view
            }
            break;
        case 'APP_SET_ACTIVE_PLAYER':
            return {
                ...state,
                activePlayer: action.data.playerType
            }
            break;
    }
    return state;
}
