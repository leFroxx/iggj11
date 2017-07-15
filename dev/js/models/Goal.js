export default class Goal {
    constructor(type, value) {
        if (!goalTypes.includes(type)) {
            console.error("invalid type value: " + type);
            return;
        }

        this.type = type;
        this.value = value;
    }
}

const goalTypes = [
    "raise",
    "holiday",
    "bonus"
];

export {
    goalTypes,
}
