import { Player } from '../models';

export const initPlayers = (dispatch) => {
    return () => {
        const goalsMetric = Player.generateRandomGoals();
        const boss = new Player("boss", goalsMetric.goalsBoss);
        const worker = new Player("worker", goalsMetric.goalsWorker);

        console.log("init players");

        return dispatch({
            type: 'PLAYERS_INIT',
            data: {
                boss,
                worker
            }
        });
    };
}
