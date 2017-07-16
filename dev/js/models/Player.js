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
        goalHolidayMinValue,
        goalHolidayMaxValue,
        goalHolidayMinDiff,
        goalHolidayMaxDiff,
        goalBonusMinValue,
        goalBonusMaxValue,
        goalBonusMinDiff,
        goalBonusMaxDiff
    } = config;
    const raiseMetric = common.randomWithDiff(goalRaiseMinValue, goalRaiseMaxValue, goalRaiseMinDiff, goalRaiseMaxDiff);
    const holidayMetric = common.randomWithDiff(goalHolidayMinValue, goalHolidayMaxValue, goalHolidayMinDiff, goalHolidayMaxDiff);
    const bonusMetric = common.randomWithDiff(goalBonusMinValue, goalBonusMaxValue, goalBonusMinDiff, goalBonusMaxDiff);
    const goalsBoss = {
        raise: raiseMetric[0],
        holiday: holidayMetric[0],
        bonus: bonusMetric[0],
    }
    const goalsWorker = {
        raise: raiseMetric[1],
        holiday: holidayMetric[1],
        bonus: bonusMetric[1],
    }

    return {
        goalsBoss,
        goalsWorker
    };
}
