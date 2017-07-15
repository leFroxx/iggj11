import StartScreen from '../views/StartScreen.js';

const defaultState = {
    id: StartScreen.id
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'APP_CHANGE_VIEW':
            return {
                id: action.data.id
            }
            break;
    }
    return state;
}
