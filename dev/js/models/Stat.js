export default class Stat {
    constructor(type, value) {
        if (!statTypes.includes(type)) {
            console.error("invalid type value: " + type);
            return;
        }

        this.type = type;
        this.value = value;
    }
}

const statTypes = [
    "moral",
    "wealth",
    "reputation"
];

export {
    statTypes,
}
