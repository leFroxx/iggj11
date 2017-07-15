import { Player } from '../models';

export const changeView = (view) => {
    return {
        type: 'APP_CHANGE_VIEW',
        data: {
            view
        }
    }
}
export const initPlayers = () => {
    const goalsMetric = Player.generateRandomGoals();
    const boss = new Player("boss", goalsMetric.goalsBoss);
    const worker = new Player("worker", goalsMetric.goalsWorker);

    return {
        type: 'APP_INIT_PLAYERS',
        data: {
            boss,
            worker
        }
    }
}
export const setActivePlayer = (playerType) => {
    return {
        type: 'APP_SET_ACTIVE_PLAYER',
        data: {
            playerType
        }
    }
}
