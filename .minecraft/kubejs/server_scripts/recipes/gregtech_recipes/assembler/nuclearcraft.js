ServerEvents.recipes(event => {
    const gt = event.recipes.gtceu

    //Controllers

        gt.assembler('nuclearcraft:fission_reactor_controller')
        .itemInputs(
            'gtceu:iv_machine_hull', 
            '12x gtceu:titanium_frame',
            '4x gtceu:tungsten_steel_rotor',
            '48x gtceu:ruridit_foil',
            '2x gtceu:tungsten_spring',
            '64x #gtceu:capacitors',
            "gtceu:iv_vanadium_battery",
            "gtceu:iv_vanadium_battery",
            "gtceu:iv_vanadium_battery",
            '64x #gtceu:capacitors',
            'gtceu:reinforced_epoxy_resin_block'
        )
        .itemOutputs(
            'nuclearcraft:fission_reactor_controller'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(4800)
        .cleanroom(CleanroomType.CLEANROOM)

        gt.assembly_line("nuclearcraft:fusion_core")
        .itemInputs(
            '2x gtceu:iv_energy_input_hatch_4a',
            'gtceu:superconducting_coil',
            "4x gtceu:hsss_frame",
            "8x #gtceu:circuits/luv", 
            "gtceu:luv_vanadium_battery",
            "gtceu:luv_vanadium_battery",
            "gtceu:luv_vanadium_battery",
            '12x gtceu:indium_tin_barium_titanium_cuprate_double_wire', 
            "32x gtceu:fine_ruridit_wire"
        )
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:hsss 1440", "gtceu:vanadium_gallium 1440")
        .itemOutputs("nuclearcraft:fusion_core")
        .duration(18000)
        .EUt(GTValues.VA[GTValues.LuV])
        .stationResearch(b => b
            .researchStack("gtceu:indium_tin_barium_titanium_cuprate_double_wire")
            .CWUt(32, 1024)
            .EUt(GTValues.VA[GTValues.LuV])
        )

    //Casings

    gt.assembler('nuclearcraft:fusion_reactor_casing')
    .itemInputs(
        'gtceu:luv_machine_hull', 
        '2x gtceu:hsse_frame',
        '4x gtceu:small_osmiridium_gear',
        '2x gtceu:neutron_reflector',
        '8x gtceu:dense_rhodium_plated_palladium_plate',
        '24x #gtceu:capacitors',
        'gtceu:reinforced_epoxy_resin_block'
    )
    .inputFluids(
        Fluid.of('gtceu:vanadium_gallium', 288)
    )
    .itemOutputs(
        '3x nuclearcraft:fusion_reactor_casing'
    )
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(4800)
    .cleanroom(CleanroomType.CLEANROOM)

    gt.assembler('nuclearcraft:fusion_reactor_connector')
    .itemInputs(
        'nuclearcraft:fusion_reactor_casing', 
        '12x gtceu:indium_tin_barium_titanium_cuprate_double_wire',
        'gtceu:borosilicate_glass_block'
    )
    .inputFluids(
        Fluid.of('gtceu:ultimet', 72)
    )
    .itemOutputs(
        'nuclearcraft:fusion_reactor_casing_glass'
    )
    .EUt(GTValues.VA[GTValues.LuV] / 2)
    .duration(240)
    .cleanroom(CleanroomType.CLEANROOM)

    gt.assembler('nuclearcraft:fusion_reactor_casing_glass')
    .itemInputs(
        'nuclearcraft:fusion_reactor_casing', 
        '2x gtceu:laminated_glass',
        'gtceu:borosilicate_glass_block'
    )
    .inputFluids(
        Fluid.of('gtceu:ultimet', 72)
    )
    .itemOutputs(
        'nuclearcraft:fusion_reactor_casing_glass'
    )
    .EUt(GTValues.VA[GTValues.LuV] / 2)
    .duration(240)
    .cleanroom(CleanroomType.CLEANROOM)

    //ElectroMagnets
    //Max 6 inputs
    function electroMagnet(inputs, output) {
        gt.forming_press(output)
        .itemInputs(

        )
        .itemOutputs(output)
        .EUt(GTValues.VA[GTValues.LuV] / 2)
        .duration(240)
    }




})