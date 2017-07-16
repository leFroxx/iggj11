import StartScreen from '../views/StartScreen.js';

const defaultState = {
    activeView: StartScreen.id,
    // activeView: localStorage.getItem('activeView') || StartScreen.id,
    viewHistory: [StartScreen.id],
    activePlayer: null,
    displayedCard: null,
    cardHistory: [],
    activePhase: "negotiation"
};
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'APP_SET_ACTIVE_VIEW':
        {
            localStorage.setItem('activeView', action.data.view);
            const displayedCard = action.data.params ? action.data.params.type : null;

            return {
                ...state,
                activeView: action.data.view,
                viewHistory: state.viewHistory.concat(action.data.view),
                displayedCard
            }
        }
        case 'APP_SET_ACTIVE_PLAYER':
            return {
                ...state,
                activePlayer: action.data.playerType
            }
        case 'CARD_PLAY_DISPLAYED_CARD':
        {
            const displayedCard = state.displayedCard;

            return {
                ...state,
                cardHistory: state.cardHistory.concat(displayedCard),
            }
        }
        case 'APP_SET_ACTIVE_PHASE':
        {
            console.log(action);
            return {
                ...state,
                activePhase: action.data.phase,
                cardHistory: []
            }
        }
    }
    return state;
}
