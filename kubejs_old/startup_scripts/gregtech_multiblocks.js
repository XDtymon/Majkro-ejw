const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe")
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine")
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")
const $WorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine")
const $ModifierFunction = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction")


function TemperatureModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return $ModifierFunction.NULL
    if (!(machine instanceof $GTRecipe)) return $ModifierFunction.NULL

    if (!machine instanceof $CoilWorkableElectricMultiblockMachine) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine)
    } else {
        let temp = machine.getCoilType().getCoilTemperature()
    
        let recipeTemp = recipe.data.getInt("RequiredTemp")
        if (recipeTemp > temp) {
            return $ModifierFunction.NULL
        }
        return $ModifierFunction.IDENTITY
    }
}





GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('solar_array_generator')
    .category('generator')
    .setMaxIOSize(0, 0, 1, 0)
    .setEUIO('out')
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE)

})



GTCEuStartupEvents.registry('gtceu:machine', event => {

    GTRecipeTypes.get("solar_array_generator").addDataInfo((data) => (
        `Temperature: ${data.getInt("RequiredTemp")}K` // 
    )) //

    event.create('solar_array_generator', 'multiblock')
    .recipeType('solar_array_generator')
    //.machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
    //.recipeModifiers([(machine, recipe) => TemperatureModifier(machine, recipe)])
    .rotationState(RotationState.NON_Y_AXIS)
    .generator(true)
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID) //SOLID_MACHINE_CASING
    .pattern(definition => FactoryBlockPattern.start()
        .aisle(
            "CCC", 
            "AAA", 
            "CCC",
            "SSS"
        )  
        .aisle(
            "C*C", 
            "ABA",
            "CBC",
            "SSS"
        )
        .aisle(
            "CCC", 
            "AMA",
            "CCC",
            "SSS"
        ) 
        .where('M', Predicates.controller(Predicates.blocks("gtceu:solar_array_generator")))
        .where('A', 
            Predicates.blocks('gtceu:solid_machine_casing')
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
        )
        .where('B', Predicates.blocks('gtceu:steel_pipe_casing'))
        .where('*', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
        .where('C', Predicates.heatingCoils())
        .where('S', Predicates.blocks('minecraft:daylight_detector'))
        
        .build()
    )
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/generator/large_plasma_turbine"
    )
    /*.additionalDisplay((machine, components) => { // 
        if (machine.isFormed()) { // 
            let temp = machine.getCoilType().getCoilTemperature()
            components.add(Component.literal(`Temperature: ${temp}K`)) // 
        }
    })*/
})






/*
0.1v
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('solar_array_generator', 'multiblock')
    .recipeType('solar_array_generator')
    .rotationState(RotationState.NON_Y_AXIS)
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID) //SOLID_MACHINE_CASING
    .pattern(definition => FactoryBlockPattern.start()
        .aisle(
            "CCC", 
            "AAA", 
            "CCC",
            "SSS"
        )  
        .aisle(
            "CCC", 
            "ABA",
            "CCC",
            "SSS"
        )
        .aisle(
            "CCC", 
            "AMA",
            "CCC",
            "SSS"
        ) 
        .where('M', Predicates.controller(Predicates.blocks("gtceu:solar_array_generator")))
        .where('A', 
            Predicates.blocks('gtceu:solid_machine_casing')
        .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
        )
        .where('B', Predicates.blocks('gtceu:steel_pipe_casing'))
        .where('C', Predicates.blocks('minecraft:glowstone'))
        .where('S', Predicates.blocks('minecraft:daylight_detector'))
        
        .build()
    )
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/generator/large_plasma_turbine"
    )
})

*/