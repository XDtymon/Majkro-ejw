GTCEuServerEvents.fluidVeins(event => {
    event.add('gtceu:custom_bedrock_fluid_vein', vein => {
        vein.dimensions('minecraft:overworld') // 
        vein.fluid(() => Fluid.of('gtceu:high_pressure_steam_plasma').fluid) 
        vein.weight(50)
        vein.minimumYield(75)
        vein.maximumYield(280)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(35)
    });
    event.add('gtceu:custom_bedrock_fluid_vein', vein => {
        vein.dimensions('minecraft:overworld') // 
        vein.fluid(() => Fluid.of('gtceu:magmatic_steam_plasma').fluid) 
        vein.weight(10)
        vein.minimumYield(20)
        vein.maximumYield(160)
        vein.depletionAmount(1)
        vein.depletionChance(1)
        vein.depletedYield(5)
    });
});