export default class Phase {
    constructor(type) {
        if (!phaseTypes.includes(type)) {
            console.error("invalid type value: " + type);
            return;
        }

        this.type = type;
    }
}

const phaseTypes = [
    "negotiation",
    "dispute"
]
