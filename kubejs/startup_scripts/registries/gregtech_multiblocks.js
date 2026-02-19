const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe")
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine")
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")
const $WorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine")
const $ModifierFunction = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction")
const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');
const $Tags = Java.loadClass("dev.latvian.mods.kubejs.util.Tags")


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

function TurbineTemperatureModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) {
        console.log("metamaszin")
        return $ModifierFunction.NULL
    }
    if (!(machine instanceof $GTRecipe)) {
        console.log("gitirecipi")
        return $ModifierFunction.NULL
    }
    console.log(machine.getCoilType().getCoilTemperature())
        let temp = 1200
        let recipeTemp = recipe.data.getInt("RequiredTemp")
        if (recipeTemp > temp) {
            return $ModifierFunction.NULL
        }
        return $ModifierFunction.IDENTITY
    
}



GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('high_temperature_turbine')
    .category('generator')
    .setMaxIOSize(1, 1, 1, 1)
    .setEUIO('out')
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE)
    event.create('arc_polarization_factory')
    .category('machine')
    .setMaxIOSize(3, 2, 3, 2)
    .setEUIO('in')
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC)
    event.create('bronze_kinetic_blaster')
    .category('machine')
    .setMaxIOSize(3, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC)
    event.create('greenhouse')
    .category('machine')
    .setMaxIOSize(4, 4, 2, 2)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC)
    event.create('high_force_press')
    .category('machine')
    .setMaxIOSize(6, 1, 2, 2)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC) //Bender plz
    event.create('critical_state_quantum_entangler')
    .category('machine')
    .setMaxIOSize(2, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPUTATION) //
    event.create('heat_fryer')
    .category('machine')
    .setMaxIOSize(8, 1, 1, 1)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BOILER) //
    event.create('solar_generator')
    .category('generator')
    .setMaxIOSize(0, 0, 1, 0)
    .setEUIO('out')
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    
    GTRecipeTypes.get("arc_polarization_factory").addDataInfo((data) => 
    (
        `Temperature: ${data.getInt("temp")}K` // 

    ))
    GTRecipeTypes.get("greenhouse").addDataInfo((data) => 
    (
        `Temperature: ${data.getInt("RequiredTemp")}K` // 

    ))
    GTRecipeTypes.get("heat_fryer").addDataInfo((data) => 
    (
        `Temperature: ${data.getInt("RequiredTemp")}K` // 

    ))
    GTRecipeTypes.get("solar_generator").addDataInfo((data) => 
    (
        `Temperature: ${data.getInt("RequiredTemp")}K` // 

    ))

    event.create('high_temperature_turbine', 'multiblock')
        .generator(true)
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('high_temperature_turbine')
        .machine((holder) => new $LargeTurbineMachine(holder, GTValues.LuV))
        .recipeModifiers(
            [
                GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, 
                GTRecipeModifiers.BATCH_MODE, 
                (machine, recipe) => $LargeTurbineMachine.recipeModifier(machine, recipe)
            ]
         )
        .recipeModifiers([(machine, recipe) => TurbineTemperatureModifier(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_HSSE_STURDY)
        .pattern(definition => FactoryBlockPattern
            .start()

            .aisle("####C#", "#$$#C#", "####C#")
            .aisle("#$$#C#", "E%%%%*", "#$$#C#")
            .aisle("####C#", "#M$#C#", "####C#")

            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('*', Predicates.ability(PartAbility.ROTOR_HOLDER).setExactLimit(1))
            .where('E', Predicates.ability(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
            .where('$',Predicates.blocks('gtceu:sturdy_machine_casing')
                .or(Predicates.ability(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.MUFFLER).setExactLimit(1))
                .or(Predicates.ability(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('#', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('%', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('C', Predicates.heatingCoils())

            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_sturdy_hsse','gtceu:block/multiblock/generator/large_plasma_turbine')
    
    event.create("arc_polarization_factory", "multiblock")
        .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('arc_polarization_factory')
        .recipeModifiers([(machine, recipe) => TemperatureModifier(machine, recipe)]) // 
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.
            start()

            .aisle("  ##M##  ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "  #####  ")
            .aisle(" ##$$$## ", "         ", "         ", "         ", "   CCC   ", "         ", "         ", "         ", " ##$$$## ")
            .aisle("##$$$$$##", "    F    ", "    E    ", "   FFF   ", "  CAPAC  ", "   FFF   ", "    E    ", "    F    ", "##$$$$$##")
            .aisle("#$$$$$$$#", "   CPC   ", "   CAC   ", "  FCACF  ", " CACPCAC ", "  FCACF  ", "   CAC   ", "   CPC   ", "#$$$$$$$#")
            .aisle("#$$$$$$$#", "  FPGPF  ", "  EAGAE  ", "  FAGAF  ", " CPPGPPC ", "  FAGAF  ", "  EAGAE  ", "  FPGPF  ", "#$$$$$$$#")
            .aisle("#$$$$$$$#", "   CPC   ", "   CAC   ", "  FCACF  ", " CACPCAC ", "  FCACF  ", "   CAC   ", "   CPC   ", "#$$$$$$$#")
            .aisle("##$$$$$##", "    F    ", "    E    ", "   FFF   ", "  CAPAC  ", "   FFF   ", "    E    ", "    F    ", "##$$$$$##")
            .aisle(" ##$$$## ", "         ", "         ", "         ", "   CCC   ", "         ", "         ", "         ", " ##$$$## ")
            .aisle("  ##@##  ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "  #####  ")


            .where(' ', Predicates.any()) //
            .where('A', Predicates.blocks("minecraft:air")) //
            .where('#', Predicates.blocks('gtceu:nonconducting_casing')
                .or(Predicates.ability(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.ability(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(0))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
            .where('E', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .where('F', Predicates.blocks('gtceu:filter_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox')) //gtceu:tungstensteel_gearbox
            .where('C', Predicates.heatingCoils())
            .where('$', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('M', Predicates.ability(PartAbility.MUFFLER).setExactLimit(1))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingModel(
            "gtceu:block/casings/gcym/nonconducting_casing",
            "gtceu:block/multiblock/pyrolyse_oven"
        );
    event.create("bronze_kinetic_blaster", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('bronze_kinetic_blaster')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.
            start()

            .aisle(" $$$  ", " #O#  ", " ###  ", "      ", "      ", "      ")
            .aisle("$$$$$$", "#GPG##", "######", "  #   ", "  #   ", "  #   ")
            .aisle("$$$$$$", "@PGGGS", "######", " #P#  ", " #P#  ", " #M#  ")
            .aisle("$$$$$$", "#GPG##", "######", "  #   ", "  #   ", "  #   ")
            .aisle(" $$$  ", " #I#  ", " ###  ", "      ", "      ", "      ")


            .where(' ', Predicates.any())
            .where('#', Predicates.blocks('gtceu:steam_machine_casing')) 
            .where('$', Predicates.blocks('gtceu:bronze_brick_casing')) 
            .where('P', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('S', Predicates.ability(PartAbility.STEAM).setMaxGlobalLimited(1))
            .where('M', Predicates.ability(PartAbility.MUFFLER).setExactLimit(1))
            .where('O', Predicates.ability(PartAbility.STEAM_EXPORT_ITEMS).setExactLimit(1))
            .where('I', Predicates.ability(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingModel(
            "gtceu:block/casings/gcym/nonconducting_casing",
            "gtceu:block/multiblock/pyrolyse_oven"
        );
    
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .recipeModifiers([(machine, recipe) => TemperatureModifier(machine, recipe)])
        .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern
            .start()

            .aisle("#$$$$$$$#", "#GGGGGGG#", "#GGGGGGG#", "#GGGGGGG#", " ##GGG## ", "  #####  ")
            .aisle("#DDDDDDD#", "G       G", "G       G", "#       #", "##CCCCC##", " ####### ")
            .aisle("#DDDDDDD#", "G       G", "G       G", "G       G", "#CCCCCCC#", " ####### ")
            .aisle("#DDDDDDD#", "G       G", "G       G", "#       #", "##CCCCC##", " ####### ")
            .aisle("#$$$$$$$#", "#GGGMGGG#", "#GGGGGGG#", "#GGGGGGG#", " ##GGG## ", "  #####  ")

            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('$',Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.ability(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.ability(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('#', Predicates.blocks('gtceu:solid_machine_casing'))
            .where('D', Predicates.blocks('minecraft:dirt'))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('C', Predicates.heatingCoils())

            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel','gtceu:block/multiblock/generator/large_plasma_turbine')

    event.create('high_force_press', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('high_force_press')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern
            .start()

            .aisle("$$$$$", " #F# ", "  F  ", "     ", "     ", "     ", "     ", "     ")
            .aisle("$###$", "#PGP#", " FFF ", "  F  ", "  F  ", "     ", "     ", "     ")
            .aisle("$###$", "FPGPF", "FFGFF", " FGF ", " FGF ", "  F  ", "  F  ", "  F  ")
            .aisle("$###$", "#PGP#", " FFF ", "  F  ", "  F  ", "     ", "     ", "     ")
            .aisle("$$$$$", " #M# ", "  F  ", "     ", "     ", "     ", "     ", "     ")

            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('$',Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.ability(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.ability(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('#', Predicates.blocks('gtceu:solid_machine_casing'))
            .where('G', Predicates.blocks('gtceu:steel_gearbox'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))

            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel','gtceu:block/multiblock/evaporation_plant')

    event.create('critical_state_quantum_entangler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('critical_state_quantum_entangler')
        .appearanceBlock(GTBlocks.COMPUTER_CASING)
        .pattern(definition => FactoryBlockPattern
            .start()

            .aisle("               ", "  &&C#####C&&  ", "  ##C$$E$$C##  ", "  &&C#####C&&  ", "               ")
            .aisle("  &&C#####C&&  ", "&&&CCCCCCCCC&&&", "&##AAAAAAAAA##&", "&&&CCCCCCCCC&&&", "  &&C#####C&&  ")
            .aisle("  ##C$$R$$C##  ", "&##AAAAAAAAA##&", "IAAAAAAAAAAAAAI", "&##AAAAAAAAA##&", "  ##C$$O$$C##  ")
            .aisle("  &&C#####C&&  ", "&&&CCCCCCCCC&&&", "&##AAAAAAAAA##&", "&&&CCCCCCCCC&&&", "  &&C#####C&&  ")
            .aisle("               ", "  &&C#####C&&  ", "  ##C$$M$$C##  ", "  &&C#####C&&  ", "               ")
            

            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('$',Predicates.blocks('gtceu:filter_casing')
                .or(Predicates.ability(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('#', Predicates.blocks('gtceu:computer_casing'))
            .where('&', Predicates.blocks('gtceu:high_power_casing'))
            .where('C', Predicates.blocks('gtceu:superconducting_coil'))
            .where('E', Predicates.ability(PartAbility.INPUT_ENERGY).setExactLimit(1))
            .where('R', Predicates.ability(PartAbility.COMPUTATION_DATA_RECEPTION).setExactLimit(1))
            .where('O', Predicates.ability(PartAbility.EXPORT_ITEMS).setExactLimit(1))
            .where('I', Predicates.ability(PartAbility.IMPORT_ITEMS).setExactLimit(2))
            .where('F', Predicates.blocks('gtceu:filter_casing'))
            .where('A', Predicates.blocks('minecraft:air'))

            .build()
        )
        .workableCasingModel('gtceu:block/casings/cleanroom/filter_casing','gtceu:block/multiblock/fusion_reactor')

    event.create('heat_fryer', 'multiblock')
        .rotationState(RotationState.Y_AXIS)
        .recipeType('heat_fryer')
        .recipeModifiers([(machine, recipe) => TemperatureModifier(machine, recipe)])
        .machine((holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern
            .start()

            .aisle("$$$", "FGF", "FGF", "###")
            .aisle("$M$", "GAG", "GAG", "#E#")
            .aisle("$$$", "FGF", "FGF", "###")
            

            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('$',Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.ability(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.ability(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.ability(PartAbility.IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.ability(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
            )
            .where('A', Predicates.blocks('minecraft:air'))
            .where('#', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('F', Predicates.heatingCoils())
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('E', Predicates.ability(PartAbility.INPUT_ENERGY).setExactLimit(1))

            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel','gtceu:block/multiblock/cleanroom')

        
})






/*

               .or(Predicates.ability(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.IMPORT_ITEMS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1))


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





    event.create('solar_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('solar_generator')
        .machine((holder) => new $LargeTurbineMachine(holder, GTValues.MV))
        .recipeModifiers(
            [
                GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, 
                GTRecipeModifiers.BATCH_MODE, 
                (machine, recipe) => $LargeTurbineMachine.recipeModifier(machine, recipe)
            ]
        )
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .pattern(definition => FactoryBlockPattern
            .start()

            .aisle("CCC", "$I$", "CCC", "###")
            .aisle("CEC", "$R$", "CAC", "###")
            .aisle("CCC", "$M$", "CCC", "###")

            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('$', Predicates.blocks('gtceu:heatproof_machine_casing'))
            .where('A', Predicates.blocks('minecraft:air'))
            .where('#', Predicates.blockTag($Tags.block('kubejs:solar_panels')))
            .where('I', Predicates.ability(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
            .where('C', Predicates.heatingCoils())
            .where('R', Predicates.ability(PartAbility.ROTOR_HOLDER).setExactLimit(1))
            .where('E', Predicates.ability(PartAbility.OUTPUT_ENERGY).setExactLimit(1))

            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_heatproof','gtceu:block/multiblock/pyrolyse_oven')
*/