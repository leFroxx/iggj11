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
    const boss = new Player("boss");
    const worker = new Player("worker");
    console.log("boss");
    console.log(boss);

    return {
        type: 'APP_INIT_PLAYERS',
        data: {
            boss,
            worker
        }
    }
}
