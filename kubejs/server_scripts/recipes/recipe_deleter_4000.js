ServerEvents.recipes(event => {
    //Create
    event.remove('create:crafting/materials/transmitter')
    event.remove('create:crafting/kinetics/fluid_pipe')
    event.remove('create:crafting/kinetics/fluid_pipe_vertical')
    event.remove('create:crafting/kinetics/deployer')
    event.remove('create:crafting/kinetics/steam_engine')
    event.remove('create:crafting/kinetics/mechanical_arm')
    event.remove('create:pressing/copper_ingot')
    event.remove('create:pressing/gold_ingot')
    event.remove('create:pressing/brass_ingot')
    event.remove('create:pressing/iron_ingot')
    event.remove('create:crafting/logistics/redstone_link')
    event.remove('create:mixing/compat/ae2/fluix_crystal')
    event.remove('create:crafting/logistics/display_link')
    event.remove('create:crafting/logistics/stock_link')
    event.remove('create:crafting/logistics/factory_gauge')
    event.remove('create:crafting/logistics/packager')
    event.remove('create:crafting/appliances/chain_from_zinc')
    event.remove('create_factory_logistics:factory_fluid_gauge')
    event.remove('create_factory_logistics:jar_packager')
    event.remove("create:mixing/brass_ingot")
    //AE2
    event.remove({mod: "ae2"})
    //Nuclear Craft 
    event.remove({mod: "nuclearcraft"})
    //GT
    event.remove('gtceu:shapeless/coated_board_1x')
    event.remove('gtceu:shapeless/coated_board')
    event.remove('gtceu:shaped/electronic_circuit_lv')
    event.remove('gtceu:shaped/electronic_circuit_mv')
    event.remove('gtceu:circuit_assembler/electronic_circuit_lv')
    event.remove('gtceu:circuit_assembler/electronic_circuit_lv_soldering_alloy')
    event.remove('gtceu:circuit_assembler/electronic_circuit_mv')
    event.remove('gtceu:circuit_assembler/electronic_circuit_mv_soldering_alloy')
    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_chromite')
    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_ruby')
    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_uvarovite')
    //event.remove(/gtceu:fusion_reactor.*/)

    //Circuits
    event.remove('create:sequenced_assembly/precision_mechanism')
    event.remove('create_factory_logistics:sequenced_assembly/fluid_mechanism')
    event.remove('create:crafting/materials/electron_tube')
        //Vacuum Tube 
        event.remove('gtceu:shaped/vacuum_tube')
        event.remove('gtceu:assembler/vacuum_tube_red_alloy')
        event.remove('gtceu:assembler/vacuum_tube_red_alloy_annealed')
        event.remove('gtceu:assembler/vacuum_tube_plain')




    //Misc
    event.remove('gtceu:forming_press/credit_cupronickel')
    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_clay')

    const powers = [
        'lv',
        'mv',
        'hv', 
        'ev'
    ]
    const parts = [
        'electric_motor', 
        'electric_pump', 
        'field_generator', 
        'conveyor_module', 
        'electric_piston', 
        'robot_arm',
        'emitter',
        'sensor'
    ]
    if (true) {
        for (let i=0; i < powers.length; i++) {
            for (let o=0; o < parts.length; o++) {
                    event.remove({ output: 'gtceu:' + powers[i] + '_' + parts[o]})
                }
            }
        }

    for(let i = 0; i < powers.length; i++) {
        event.remove('gtceu:' + powers[i] + '_rock_crusher')
    }
})
