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
    5,
	6
];
export const workerAttacks = [
    1,
    7,
    8,
    9,
    10,
    11
];

/* Attacks' damage to the depending stat */
export const attack1Damage = {
    reputation: 20
}
export const attack2Damage = {
    wealth: 20
}
export const attack3Damage = {
    moral: 20
}
export const attack4Damage = {
	moral: 10
}
export const attack5Damage = {
	moral: 10,
    waelth: 10
}
export const attack6Damage = {
	moral: 10,
    reputation: 10
}
export const attack7Damage = {
    reputation: 10
}
export const attack8Damage = {
	moral: 20
}
export const attack9Damage = {
    wealth: 20
}
export const attack10Damage = {
	moral: 10,
    wealth: 10
}
export const attack11Damage = {
	moral: 10,
    reputation: 10
}

/* The stats (from 0 up to all 3) that are weakened during the oppoent's following turn by using an attack
 * possible values: stat names as string */
export const attack1WeakenedStat = [
    "moral"
]
export const attack2WeakenedStat = [
    "reputation"
]
export const attack3WeakenedStat = [
    "wealth"
]
export const attack4WeakenedStat = [
]
export const attack5WeakenedStat = [
    "reputation"
]
export const attack6WeakenedStat = [
    "wealth"
]
export const attack7WeakenedStat = [
]
export const attack8WeakenedStat = [
    "wealth"
]
export const attack9WeakenedStat = [
    "reputation"
]
export const attack10WeakenedStat = [
    "wealth"
]
export const attack11WeakenedStat = [
    "reputation"
]
