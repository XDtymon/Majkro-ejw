ServerEvents.recipes(event => {

    let debug = 1;

    //AE2

    const cells = [
        "1k",
        "4k",
        "16k",
        "64k",
        "256k"
    ]

    event.recipes.gtceu.assembly_line("ae2:controller")
        .itemInputs(
            "create:stock_ticker", 
            "gtceu:lapotronic_energy_orb",
            "gtceu:computer_casing",
            "4x gtceu:hsss_frame",
            "8x #gtceu:circuits/luv", 
            "64x gtceu:fine_ruridit_wire", 
            "32x gtceu:fine_ruridit_wire", 
            "64x ae2:fluix_glass_cable",
            "ae2:condenser",
            "ae2:energy_acceptor"
        )
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:hsse 1440")
        .itemOutputs("ae2:controller")
        .duration(18000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("create:stock_ticker")
            .CWUt(8, 1024)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:energy_acceptor")
        .itemInputs(
            "gtceu:computer_casing",
            "32x gtceu:fine_hssg_wire", 
            "8x gtceu:tungsten_quadruple_wire",
            "4x gtceu:rhodium_gear"
        )
        .itemOutputs("ae2:energy_acceptor")
        .duration(4500)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack('gtceu:tungsten_hex_wire')
            .CWUt(4, 512)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:condenser")
        .itemInputs(
            "gtceu:computer_casing",
            "32x gtceu:fine_hssg_wire", 
            "8x minecraft:anvil",
            "4x gtceu:iv_electric_piston"
        )
        .itemOutputs("ae2:condenser")
        .duration(2250)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("gtceu:data_orb")
            .CWUt(4, 512)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:cell_workbench")
        .itemInputs(
            "gtceu:computer_casing",
            "16x gtceu:fine_hssg_wire",
            "ae2:certus_quartz_wrench",
            "ae2:certus_quartz_wrench",
            "ae2:certus_quartz_wrench",
            "ae2:certus_quartz_wrench",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:cell_workbench")
        .duration(4500)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:item_cell_housing")
            .CWUt(4, 512)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:energy_cell_ev")
        .itemInputs(
            "gtceu:computer_casing",
            "gtceu:ev_vanadium_battery",
            "16x gtceu:fine_hssg_wire",
            "64x ae2:charged_certus_quartz_crystal",
            "32x ae2:charged_certus_quartz_crystal",
            "gtceu:ev_battery_buffer_8x"
        )
        .itemOutputs("ae2:energy_cell")
        .duration(4500)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:charged_certus_quartz_crystal")
            .CWUt(4, 512)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:energy_cell_iv")
        .itemInputs(
            "gtceu:computer_casing",
            "gtceu:iv_vanadium_battery",
            "32x gtceu:fine_hssg_wire",
            "64x ae2:charged_certus_quartz_crystal",
            "64x ae2:charged_certus_quartz_crystal",
            "64x ae2:charged_certus_quartz_crystal",
            "16x ae2:singularity",
            "gtceu:iv_battery_buffer_8x"
        )
        .itemOutputs("6x ae2:energy_cell")
        .duration(12000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:charged_certus_quartz_crystal")
            .CWUt(8, 2048)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:energy_cell_luv")
        .itemInputs(
            "gtceu:computer_casing",
            "gtceu:luv_vanadium_battery",
            "64x gtceu:fine_hssg_wire",
            "16x ae2:flawless_budding_quartz",
            "64x ae2:singularity",
            "gtceu:luvv_battery_buffer_8x"
        )
        .itemOutputs("32x ae2:energy_cell")
        .duration(45000)
        .EUt(32768)
        .stationResearch(b => b
            .researchStack("ae2:charged_certus_quartz_crystal")
            .CWUt(16, 8192)
            .EUt(16384)
        )

    event.recipes.gtceu.assembly_line("ae2:dense_energy_cell_zpm")
        .itemInputs(
            "4x gtceu:computer_casing",
            "ae2:energy_cell",
            "gtceu:zpm_naquadria_battery",
            "gtceu:zpm_naquadria_battery",
            "64x gtceu:fine_europium_wire",
            "gtceu:zpm_battery_buffer_8x"
        )
        .itemOutputs("2x ae2:dense_energy_cell")
        .duration(22000)
        .EUt(131072)
        .stationResearch(b => b
            .researchStack("ae2:energy_cell")
            .CWUt(64, 16384)
            .EUt(16384)
        )

    event.recipes.gtceu.assembly_line("ae2:dense_energy_cell_uv")
        .itemInputs(
            "48x gtceu:computer_casing",
            "16x ae2:energy_cell",
            'gtceu:uv_naquadria_battery',
            'gtceu:uv_naquadria_battery',
            'gtceu:uv_naquadria_battery',
            'gtceu:uv_naquadria_battery',
            '64x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire',
            "8x gtceu:uv_battery_buffer_8x"
        )
        .itemOutputs("64x ae2:dense_energy_cell")
        .duration(45000)
        .EUt(1048576)
        .stationResearch(b => b
            .researchStack("ae2:energy_cell")
            .CWUt(64, 16384)
            .EUt(16384)
        )

    event.recipes.gtceu.assembly_line("ae2:portable_item_cell_1k")
        .itemInputs(
            "gtceu:computer_casing",
            '2x gtceu:osmiridium_normal_item_pipe',
            "16x gtceu:fine_hssg_wire",
            "ae2:item_cell_housing",
            "ae2:cell_component_1k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_item_cell_1k")
        .duration(12000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("gtceu:tungsten_steel_crate")
            .CWUt(4, 512)
            .EUt(8192)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_item_cell_4k")
        .itemInputs(
            "gtceu:computer_casing",
            '2x gtceu:osmiridium_normal_item_pipe',
            "64x gtceu:fine_hssg_wire",
            "ae2:item_cell_housing",
            "ae2:cell_component_4k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_item_cell_4k")
        .duration(18000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_item_cell_1k")
            .CWUt(8, 2048)
            .EUt(8192)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_item_cell_16k")
        .itemInputs(
            "gtceu:computer_casing",
            '4x gtceu:osmiridium_normal_item_pipe',
            "64x gtceu:fine_hssg_wire",
            "ae2:item_cell_housing",
            "ae2:cell_component_16k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_item_cell_16k")
        .duration(27000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_item_cell_4k")
            .CWUt(12, 4096)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_item_cell_64k")
        .itemInputs(
            "gtceu:computer_casing",
            '12x gtceu:osmiridium_normal_item_pipe',
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "ae2:item_cell_housing",
            "ae2:cell_component_64k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_item_cell_64k")
        .duration(36000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_item_cell_16k")
            .CWUt(32, 8192)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_item_cell_256k")
        .itemInputs(
            "gtceu:computer_casing",
            '16x gtceu:osmiridium_normal_item_pipe',
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "ae2:item_cell_housing",
            "ae2:cell_component_256k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_item_cell_256k")
        .duration(45000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_item_cell_64k")
            .CWUt(48, 16384)
            .EUt(16384)
        )



    event.recipes.gtceu.assembly_line("ae2:portable_fluid_cell_1k")
        .itemInputs(
            "gtceu:computer_casing",
            '2x gtceu:polybenzimidazole_normal_fluid_pipe',
            "16x gtceu:fine_hssg_wire",
            "ae2:fluid_cell_housing",
            "ae2:cell_component_1k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_fluid_cell_1k")
        .duration(12000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("gtceu:tungsten_steel_crate")
            .CWUt(4, 512)
            .EUt(8192)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_fluid_cell_4k")
        .itemInputs(
            "gtceu:computer_casing",
            '2x gtceu:polybenzimidazole_normal_fluid_pipe',
            "64x gtceu:fine_hssg_wire",
            "ae2:fluid_cell_housing",
            "ae2:cell_component_4k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_fluid_cell_4k")
        .duration(18000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_fluid_cell_1k")
            .CWUt(8, 2048)
            .EUt(8192)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_fluid_cell_16k")
        .itemInputs(
            "gtceu:computer_casing",
            '4x gtceu:polybenzimidazole_normal_fluid_pipe',
            "64x gtceu:fine_hssg_wire",
            "ae2:fluid_cell_housing",
            "ae2:cell_component_16k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_fluid_cell_16k")
        .duration(27000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_fluid_cell_4k")
            .CWUt(12, 4096)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_fluid_cell_64k")
        .itemInputs(
            "gtceu:computer_casing",
            '12x gtceu:polybenzimidazole_normal_fluid_pipe',
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "ae2:fluid_cell_housing",
            "ae2:cell_component_64k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_fluid_cell_64k")
        .duration(36000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_fluid_cell_16k")
            .CWUt(32, 8192)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:portable_fluid_cell_256k")
        .itemInputs(
            "gtceu:computer_casing",
            '16x gtceu:polybenzimidazole_normal_fluid_pipe',
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "64x gtceu:fine_hssg_wire",
            "ae2:fluid_cell_housing",
            "ae2:cell_component_256k",
            "gtceu:tungsten_steel_crate",
            "ae2:energy_cell"
        )
        .itemOutputs("ae2:portable_fluid_cell_256k")
        .duration(45000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("ae2:portable_fluid_cell_64k")
            .CWUt(48, 16384)
            .EUt(16384)
        )






    event.recipes.gtceu.assembly_line("ae2:blank_pattern")
        .itemInputs(
            "gtceu:computer_casing",
            '12x gtceu:osmiridium_normal_item_pipe',
            '12x gtceu:polybenzimidazole_normal_fluid_pipe',
            "64x gtceu:fine_hssg_wire",
            "ae2:item_cell_housing",
            "ae2:fluid_cell_housing",
            "gtceu:tungsten_steel_crate",
            "gtceu:tungsten_steel_drum",
            "ae2:energy_cell",
            "ae2:crafting_unit"
        )
        .itemOutputs("32x ae2:blank_pattern")
        .duration(9000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("create:factory_gauge")
            .CWUt(24, 16384)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:item_cell_housing")
        .itemInputs(
            "gtceu:computer_casing",
            '4x gtceu:osmiridium_normal_item_pipe',
            "16x gtceu:fine_hssg_wire",
            "gtceu:tungsten_steel_crate"
        )
        .itemOutputs("8x ae2:item_cell_housing")
        .duration(45000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("gtceu:osmiridium_normal_item_pipe")
            .CWUt(16, 16384)
            .EUt(16384)
        )
    event.recipes.gtceu.assembly_line("ae2:fluid_cell_housing")
        .itemInputs(
            "gtceu:computer_casing",
            '4x gtceu:polybenzimidazole_normal_fluid_pipe',
            "16x gtceu:fine_hssg_wire",
            "gtceu:tungsten_steel_drum"
        )
        .itemOutputs("8x ae2:fluid_cell_housing")
        .duration(9000)
        .EUt(16384)
        .stationResearch(b => b
            .researchStack("gtceu:polybenzimidazole_normal_fluid_pipe")
            .CWUt(16, 16384)
            .EUt(16384)
        )
})