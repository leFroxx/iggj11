import { common } from '../tools';

// export const n = (x) => {
//     const i = common.i;
//     return {
//         type: x.type,
//         stats: {
//             moral: stat.n(x.state.moral),
//             wealth: stat.n(x.stats.wealth),
//             reputation: stat.n(x.stats.reputation),
//         },
//         goals: {
//             raise: x.goals.raise,
//             holiday: x.goals.holiday,
//             bonus: x.goals.bonus,
//         },
//         resources: x.resources,
//         handicap: stat.n(x.handicap)
//     }
// }

export default class Player {
    type;

    constructor(type) {
        switch (type) {
            case "boss":
            case "worker":
                break;
            default:
                type = "boss";
        }
        this.type = type;

        this.stats = Player.generateRandomStats();
        this.goals = Player.generateRandomGoals();
    }
}

/* utils */
Player.generateRandomStats = () => {
    return {
        moral: 0,
        wealth: 0,
        reputation: 0
    };
}

Player.generateRandomGoals = () => {
    return {
        raise: 0,
        holiday: 0,
        bonus: 0
    };
}
