import { config, common } from '../tools';
import { statTypes } from './Stat';

export default class Player {
    constructor(type, goals) {
        switch (type) {
            case "boss":
            case "worker":
                break;
            default:
                type = "boss";
        }
        this.type = type;

        this.stats = Player.generateRandomStats();
        this.goals = goals;
    }

    getHandicapedStat() {
        const handicapedStat = statTypes.map(s => {
            const stat = this.stats[s];
            if (stat == config.statHandicapedValue) {
                return s;
            } else {
                return null;
            }
        }).filter(s => s != null)[0];

        if (handicapedStat == null) {
            console.error("No handicaped stat found" + JSON.stringify(this.stats));
        }

        return handicapedStat;
    }
}

/* utils */
Player.generateRandomStats = () => {
    const handicapedStat = Array.getRandom(statTypes);
    return {
        moral: config.statMaxValue,
        wealth: config.statMaxValue,
        reputation: config.statMaxValue,
        [handicapedStat]: config.statHandicapedValue
    };
}

Player.generateRandomGoals = () => {
    const {
        goalRaiseMinValue,
        goalRaiseMaxValue,
        goalRaiseMinDiff,
        goalRaiseMaxDiff,
        goalWealthMinValue,
        goalWealthMaxValue,
        goalWealthMinDiff,
        goalWealthMaxDiff,
        goalReputationMinValue,
        goalReputationMaxValue,
        goalReputationMinDiff,
        goalReputationMaxDiff
    } = config;
    const raiseMetric = common.randomWithDiff(goalRaiseMinValue, goalRaiseMaxValue, goalRaiseMinDiff, goalRaiseMaxDiff);
    const wealthMetric = common.randomWithDiff(goalWealthMinValue, goalWealthMaxValue, goalWealthMinDiff, goalWealthMaxDiff);
    const reputationMetric = common.randomWithDiff(goalReputationMinValue, goalReputationMaxValue, goalReputationMinDiff, goalReputationMaxDiff);
    const goalsBoss = {
        raise: raiseMetric[0],
        wealth: wealthMetric[0],
        reputation: reputationMetric[0],
    }
    const goalsWorker = {
        raise: raiseMetric[1],
        wealth: wealthMetric[1],
        reputation: reputationMetric[1],
    }

    return {
        goalsBoss,
        goalsWorker
    };
}
