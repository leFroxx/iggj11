import StartScreen from '../views/StartScreen.js';
console.log(StartScreen);
const defaultState = StartScreen;
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'APP_CHANGE_VIEW':
            return {
                key: action.data.key
            }
            break;
    }
    return state;
}
