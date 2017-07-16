export const statMinValue = 0;
export const statMaxValue = 100;
export const statHandicapedValue = 75;

export const goalRaiseMinValue = 0;
export const goalRaiseMaxValue = 10;
export const goalRaiseMinDiff = 2;
export const goalRaiseMaxDiff = 4;
export const goalHolidayMinValue = 0;
export const goalHolidayMaxValue = 5;
export const goalHolidayMinDiff = 1;
export const goalHolidayMaxDiff = 2;
export const goalBonusMinValue = 0;
export const goalBonusMaxValue = 10;
export const goalBonusMinDiff = 2;
export const goalBonusMaxDiff = 4;

export const weaknessFactor = 1.5;  // an attack's damage increases by this factor, when the attacked player is weakened

export const bossAttacks = [
    1,
    2,
    3,
    4,
    5
];
export const workerAttacks = [
    6,
    7,
    8,
    9,
    10,
    11
];

/* Attacks' damage to the depending stat */
export const attack1Damage = {
    moral: 10
}
export const attack2Damage = {
    wealth: 20,
}
export const attack3Damage = {
    moral: 10,
    reputation: 10
}
export const attack4Damage = {
}
export const attack5Damage = {
}
export const attack6Damage = {
}
export const attack7Damage = {
}
export const attack8Damage = {
}
export const attack9Damage = {
}
export const attack10Damage = {
}
export const attack11Damage = {
}

/* The stats (from 0 up to all 3) that are weakened during the oppoent's following turn by using an attack
 * possible values: stat names as string */
export const attack1WeakenedStat = [
    "moral"
]
export const attack2WeakenedStat = [
    "wealth"
]
export const attack3WeakenedStat = [
    "moral",
    "reputation"
]
export const attack4WeakenedStat = [
]
export const attack5WeakenedStat = [
    "moral",
    "wealth",
    "reputation"
]
export const attack6WeakenedStat = [
]
export const attack7WeakenedStat = [
]
export const attack8WeakenedStat = [
]
export const attack9WeakenedStat = [
]
export const attack10WeakenedStat = [
]
export const attack11WeakenedStat = [
]
