import { Player, playerTypes } from '../models';
import { MatchGoals } from '../views';

export const changeView = (dispatch) => {
    return (view, params) => {
        dispatch({
            type: 'APP_SET_ACTIVE_VIEW',
            data: {
                view,
                params
            }
        });
    }
}
export const setActivePlayer = (dispatch) => {
    return (playerType) => {
        return dispatch((dispatch, getState) => {
            const player = getState().players[playerType];

            dispatch({
                type: 'APP_SET_ACTIVE_PLAYER',
                data: {
                    playerType
                }
            });
        });
    }
}
export const setNextPlayerActive = (dispatch) => {
    return dispatch((dispatch, getState) => {
        return () => {
            const state = getState();
            const currentlyActivePlayer = state.app.activePlayer;
            const currentPlayerIndex = playerTypes.indexOf(currentlyActivePlayer);

            let nextPlayerIndex;
            if (
                currentPlayerIndex == -1    // currentlyActivePlayer invalid or null
                || currentPlayerIndex >= playerTypes.length // currentlyActivePlayer is the last one in the array
            ) {
                nextPlayerIndex = 0;
            } else {
                // following entry in array becomes next active player
                nextPlayerIndex = playerTypes.indexOf(currentlyActivePlayer) + 1;
                if (nextPlayerIndex >= playerTypes.length) {
                    nextPlayerIndex = 0;
                }
            }
            const playerType = playerTypes[nextPlayerIndex];

            return setActivePlayer(dispatch)(playerType);
        };
    });
}

export const changeActivePhase = (dispatch) => {
    return (phase) => {
        dispatch({
            type: 'APP_SET_ACTIVE_PHASE',
            data: {
                phase
            }
        });
    }
}
