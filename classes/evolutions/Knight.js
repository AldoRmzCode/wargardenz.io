const Evolution = require("./Evolution");
class Knight extends Evolution {
    constructor() {
        super();
        this.name = "knight";
        this.abilityDuration = 3000;
        this.abilityCooldown = 10000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 1.4,
            health: 1.4,
            speed: 0.7,
            scale: 1.3,
            power: 1,
            resistance: 5.5,
            damage: 1.6,
            damageCooldown: 1.3,
            healAmount: 1.5,
            healWait: 2
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 1.5,
            scale: 1.6,
            power: 2.5,
            damageCooldown: 0.7,
            resistance: 1,
            speed: 1.5,
        };
    }
}
module.exports = Knight;