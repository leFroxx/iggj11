const attack = (damagingPlayer, damagedPlayer, damage, weaknesses) => {
    return {
        type: "CARD_ATTACK",
        data: {
            damage: {
                player: damagedPlayer,
                values: {
                    moral: damage.moral || 0,
                    wealth: damage.wealth || 0,
                    reputation: damage.reputation || 0
                }
            },
            weakness: {
                player: damagingPlayer,
                stats: {
                    moral: weaknesses.moral || false,
                    wealth: weaknesses.wealth || false,
                    reputation: weaknesses.reputation || false
                }
            }
        }
    }
}
