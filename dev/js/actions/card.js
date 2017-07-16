import { appActions } from '.';

export const playDisplayedCard = (dispatch) => {
    return () => {
        let after = () => null;
        dispatch((dispatch, getState) => {
            console.log("state");
            const state = getState();
            if (state.app.displayedCard == "declinement") {
                console.log("switch to dispute")
                appActions.changeActivePhase(dispatch)("dispute");
            } else if (state.app.displayedCard == "negotiation") {
                appActions.changeActivePhase(dispatch)("negotiation");
            }
            return dispatch({
                type: "CARD_PLAY_DISPLAYED_CARD",
                data: {
                }
            });
        });
        after();
    }
}

const attack = (damagingPlayer, damagedPlayer, damage, weaknesses) => {
    return {
        type: "CARD_ATTACK",
        data: {
            damage: {
                player: damagedPlayer,
                values: {
                    moral: damage.moral || 0,
                    wealth: damage.wealth || 0,
                    reputation: damage.reputation || 0
                }
            },
            weakness: {
                player: damagingPlayer,
                stats: {
                    moral: weaknesses.moral || false,
                    wealth: weaknesses.wealth || false,
                    reputation: weaknesses.reputation || false
                }
            }
        }
    }
}
