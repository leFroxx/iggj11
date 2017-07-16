import { config, common } from '../tools';
import { statTypes } from './Stat';

// import {
//     MatchNegotiation,
//     MatchDispute
// } from '../views';

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

    getUsableCards(phaseType) {
        let usableCards = [];
        switch (phaseType) {
            case "negotiation":
                usableCards = [
                    "agreement",
                    "offer_raise",
                    "offer_holiday",
                    "offer_bonus",
                    "declinement"
                ];
                break;
            case "dispute":
                const configAttacksKey = this.type + "Attacks";
                const attacks = config[configAttacksKey].map(id => "attack_" + id);
                usableCards = attacks.concat([
                    "negotiation"
                ]);
                break;
            default:
                console.error("No cards usable because not in the match view");
                return
        }

        return usableCards
    }
}

const playerTypes = [
    "boss",
    "worker"
];

export {
    playerTypes
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
