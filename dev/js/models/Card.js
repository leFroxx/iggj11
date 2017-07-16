import { l, config } from '../tools';

export default class Card {
    constructor(type) {
        if (!cardTypes.includes(type)) {
            console.error("invalid type value: " + type);
            return;
        }

        this.type = type;
    }

    showInNeogtiation() {
        switch (this.type) {
            case "agreement":
            case "offer_raise":
            case "offer_holiday":
            case "offer_bonus":
            case "declinement":
                return true
            default:
                return false;
        }
    }

    showInBattle() {
        switch (this.type) {
            case "offer_raise":
            case "offer_holiday":
            case "offer_bonus":
            case "attack":
            case "negotiation":
                return true
            default:
                return false;
        }
    }

    getCategory() {
        switch (this.type) {
            case "agreement":
                return "agreement";
            case "offer_raise":
                return "offer_main";
            case "offer_holiday":
            case "offer_bonus":
                return "offer_secondary";
            case "declinement":
                return "declinement";
            case "attack_1":
            case "attack_2":
            case "attack_3":
            case "attack_4":
            case "attack_5":
            case "attack_6":
            case "attack_7":
            case "attack_8":
            case "attack_9":
            case "attack_10":
            case "attack_11":
                return "attack";
            case "negotiation":
                return "negotiation";
            default:
                console.error("Invalid type: " + this.type);
        }
    }

    getTitle() {
        return l("card_" + this.type + "_title");
    }

    getDescription() {
        return l("card_" + this.type + "_description");
    }

    /* Only for offers */
    displayValueSlider() {
        switch (this.type) {
            case "offer_raise":
            case "offer_holiday":
            case "offer_bonus":
                return true;
            default:
                return false;
        }
    }

    isAttackType() {
        return (this.type.indexOf("attack") != -1);
    }

    getDamage() {
        const stats = {
            "moral": 0,
            "wealth": 0,
            "reputation": 0
        };
    }

    isUsableBy(playerType) {
        console.log(playerType);
        if (!this.type.indexOf("attack_") == 0) {
            return false;
        }

        const attackId = parseInt(this.type.substr("attack_".length));
        switch (playerType) {
            case "boss":
                return config.bossAttacks.includes(attackId);
            case "worker":
                return config.workerAttacks.includes(attackId);
            default:
                return false;
        }
    }
}

const cardTypes = [
    "agreement",
    "offer_raise",
    "offer_holiday",
    "offer_bonus",
    "declinement",
    "attack_1",
    "attack_2",
    "attack_3",
    "attack_4",
    "attack_5",
    "attack_6",
    "attack_7",
    "attack_8",
    "attack_9",
    "attack_10",
    "attack_11",
    "negotiation"
];

export {
    cardTypes,
}
