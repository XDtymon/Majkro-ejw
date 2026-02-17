ServerEvents.recipes(event => {
    const gt = event.recipes.gtceu



    gt.assembler('create:mechanical_arm')
    .itemInputs(
        'create:brass_casing', 
        '2x gtceu:brass_plate',
        '4x gtceu:annealed_copper_single_wire',
        '2x gtceu:lv_robot_arm',
        'gtceu:lv_sensor'
    )
    .itemOutputs(
        'create:mechanical_arm'
    )
    .EUt(32)
    .duration(300)

    gt.assembler('create:factory_gauge_mv')
    .itemInputs(
        'create:brass_casing', 
        '4x create:precision_mechanism',
        '16x gtceu:annealed_copper_single_wire',
        'gtceu:lv_conveyor_module',
        'gtceu:lv_emitter',
        'gtceu:lv_sensor',
        '4x #gtceu:diodes'
    )
    .inputFluids(
        Fluid.of('gtceu:glass', 144)
    )
    .itemOutputs(
        '16x create:factory_gauge'
    )
    .EUt(32)
    .duration(120)

    gt.assembler('create:factory_gauge_lv')
    .itemInputs(
        'create:brass_casing', 
        '4x create_factory_logistics:fluid_mechanism',
        '16x gtceu:annealed_copper_single_wire',
        'gtceu:lv_conveyor_module',
        'gtceu:lv_emitter',
        'gtceu:lv_sensor',
        '8x #gtceu:diodes'
    )
    .inputFluids(
        Fluid.of('gtceu:glass', 144)
    )
    .itemOutputs(
        '2x create:factory_gauge'
    )
    .EUt(32)
    .duration(120)

    gt.assembler('create_factory_logistics:factory_fluid_gauge_mv')
    .itemInputs(
        'create:copper_casing', 
        '4x create:precision_mechanism',
        '16x gtceu:bronze_tiny_fluid_pipe',
        'gtceu:lv_electric_pump',
        'gtceu:lv_emitter',
        'gtceu:lv_sensor',
        '4x #gtceu:diodes'
    )
    .inputFluids(
        Fluid.of('gtceu:copper', 144)
    )
    .itemOutputs(
        '16x create_factory_logistics:factory_fluid_gauge'
    )
    .EUt(32)
    .duration(1200)

    gt.assembler('create_factory_logistics:factory_fluid_gauge_lv')
    .itemInputs(
        'create:copper_casing', 
        '4x create_factory_logistics:fluid_mechanism',
        '16x gtceu:bronze_tiny_fluid_pipe',
        'gtceu:lv_electric_pump',
        'gtceu:lv_emitter',
        'gtceu:lv_sensor',
        '4x #gtceu:diodes'
    )
    .inputFluids(
        Fluid.of('gtceu:copper', 144)
    )
    .itemOutputs(
        '2x create_factory_logistics:factory_fluid_gauge'
    )
    .EUt(32)
    .duration(1200)

    gt.assembler('create:package_frogport')
    .chancedInput("2x create:item_vault", 9000, -750)
    .itemInputs(
        'create:precision_mechanism',
        'gtceu:mv_electric_pump',
        'gtceu:mv_conveyor_module',
        '4x #gtceu:diodes'
    )
    .chancedFluidInput(Fluid.of("gtceu:glue", 1152), 7500, -500)
    .itemOutputs(
        '4x create:package_frogport'
    )
    .EUt(32)
    .duration(300)



    gt.assembler('create_factory_logistics:jar_packager')
    .itemInputs(
        'create:copper_casing',
        'gtceu:lv_electric_pump',
        '2x gtceu:copper_normal_fluid_pipe',
        '2x #gtceu:diodes'
    )
    .itemOutputs(
        'create_factory_logistics:jar_packager'
    )
    .EUt(32)
    .duration(300)

    gt.assembler('create:packager')
    .itemInputs(
        'create:andesite_casing',
        'gtceu:lv_conveyor_module',
        '2x gtceu:tin_normal_item_pipe',
        '2x #gtceu:diodes'
    )
    .itemOutputs(
        'create:packager'
    )
    .EUt(32)
    .duration(300)

    gt.assembler('create:item_vault')
    .chancedInput("8x gtceu:iron_screw", 9000, -1500)
    .chancedInput("2x gtceu:iron_rod", 9000, -500)
    .chancedInput("4x gtceu:iron_plate", 9000, -1000)
    .chancedInput('2x #gtceu:diodes', 1500, 750)
    .itemInputs(
        'create:andesite_casing',
    )
    .itemOutputs(
        '9x create:item_vault'
    )
    .EUt(32)
    .duration(1200)


    gt.assembler('ae2:fluix_glass_cable')
    .itemInputs(
        'ae2:quartz_fiber',
        '2x gtceu:exquisite_nether_quartz_gem',
        'gtceu:engraved_lapotron_crystal_chip',
        '16x gtceu:fine_copper_wire',
        'gtceu:lv_sensor',
        'gtceu:lv_emitter'
    )
    .itemOutputs('16x ae2:fluix_glass_cable')
    .EUt(8192)
    .duration(1200)

    gt.assembler('ae2:quartz_fiber')
    .itemInputs(
        '16x ae2:cable_anchor',
        '2x gtceu:soc',
        '32x ae2:quartz_glass'
    )
    .itemOutputs('12x ae2:quartz_fiber')
    .EUt(8192)
    .duration(100)

    gt.assembler('ae2:memory_card')
    .itemInputs(
        '16x ae2:cable_anchor',
        '2x gtceu:soc',
        '16x gtceu:fine_copper_wire',
        '2x gtceu:nor_memory_chip',
        '4x gtceu:copper_nugget'
    )
    .itemOutputs('ae2:memory_card')
    .EUt(8192)
    .duration(1600)

    const colors = [
        "red", 
        "yellow", 
        "orange", 
        "green", 
        "lime", 
        "cyan", 
        "blue", 
        "light_blue", 
        "magenta", 
        "pink", 
        "black", 
        "white", 
        "gray", 
        "light_gray"
    ]

    const types = [
        "smart_cable",
        "covered_cable",
        "glass_cable",
        "covered_dense_cable",
        "smart_dense_cable"
    ]

    for (let t = 0; t < types.length; t++) {
        for (let c = 0; c < colors.length; c++) {
            gt.assembler('ae2:' + colors[c] + "_" + types[t])
                .itemInputs("ae2:fluix_" + types[t])
                .inputFluids(Fluid.of('gtceu:'+ colors[c] +"_dye", 72))
                .itemOutputs('ae2:' + colors[c] + "_" +types[t])
                .EUt(1024)
                .duration(20)
                .circuit(12)
        }
    }

        for (let c = 0; c < colors.length; c++) {
            gt.assembler('ae2:' + colors[c] + "_paint_ball")
                .inputFluids(Fluid.of('gtceu:'+ colors[c] +"_dye", 72))
                .itemOutputs('ae2:' + colors[c] + "_paint_ball")
                .EUt(1024)
                .duration(20)
                .circuit(12)
            gt.assembler('ae2:' + colors[c] + "_lumen_paint_ball")
                .itemInputs("2x minecraft:glowstone")
                .inputFluids(Fluid.of('gtceu:'+ colors[c] +"_dye", 72))
                .itemOutputs('ae2:' + colors[c] + "_lumen_paint_ball")
                .EUt(1024)
                .duration(20)
                .circuit(13)
        }
})