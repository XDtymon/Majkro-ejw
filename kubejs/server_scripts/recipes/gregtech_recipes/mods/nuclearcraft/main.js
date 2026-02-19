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
            inputs
        )
        .itemOutputs(output)
        .EUt(GTValues.VA[GTValues.LuV] / 2)
        .duration(240)
    }

    const nuclearFuels = [
        {
            "group": "berkelium",
            "name": "heb_248",
            "forge_energy": 1080,
            "heat": 312,
            "criticality": 32,
            "depletion": 92,
            "efficiency": 170,
            "isotopes": [248, 247]
        },
        {
            "group": "berkelium",
            "name": "leb_248",
            "forge_energy": 270,
            "heat": 52,
            "criticality": 73,
            "depletion": 108,
            "efficiency": 165,
            "isotopes": [248, 247]
        },
        {
            "group": "californium",
            "name": "hecf_249",
            "forge_energy": 1728,
            "heat": 696,
            "criticality": 30,
            "depletion": 53,
            "efficiency": 180,
            "isotopes": [249, 252]
        },
        {
            "group": "californium",
            "name": "hecf_251",
            "forge_energy": 1800,
            "heat": 720,
            "criticality": 35,
            "depletion": 100,
            "efficiency": 185,
            "isotopes": [251, 252]
        },
        {
            "group": "californium",
            "name": "lecf_249",
            "forge_energy": 432,
            "heat": 116,
            "criticality": 60,
            "depletion": 53,
            "efficiency": 175,
            "isotopes": [249, 252]
        },
        {
            "group": "californium",
            "name": "lecf_251",
            "forge_energy": 450,
            "heat": 120,
            "criticality": 71,
            "depletion": 100,
            "efficiency": 180,
            "isotopes": [251, 252]
        },
        {
            "group": "curium",
            "name": "hecm_243",
            "forge_energy": 1680,
            "heat": 672,
            "criticality": 33,
            "depletion": 75,
            "efficiency": 150,
            "isotopes": [243, 246]
        },
        {
            "group": "curium",
            "name": "hecm_245",
            "forge_energy": 1296,
            "heat": 408,
            "criticality": 37,
            "depletion": 121,
            "efficiency": 155,
            "isotopes": [245, 246]
        },
        {
            "group": "curium",
            "name": "hecm_247",
            "forge_energy": 1104,
            "heat": 324,
            "criticality": 36,
            "depletion": 108,
            "efficiency": 160,
            "isotopes": [247, 246]
        },
        {
            "group": "curium",
            "name": "lecm_243",
            "forge_energy": 420,
            "heat": 112,
            "criticality": 66,
            "depletion": 75,
            "efficiency": 145,
            "isotopes": [243, 246]
        },
        {
            "group": "curium",
            "name": "lecm_245",
            "forge_energy": 324,
            "heat": 68,
            "criticality": 75,
            "depletion": 121,
            "efficiency": 150,
            "isotopes": [245, 246]
        },
        {
            "group": "curium",
            "name": "lecm_247",
            "forge_energy": 276,
            "heat": 54,
            "criticality": 72,
            "depletion": 108,
            "efficiency": 155,
            "isotopes": [247, 246]
        },
        {
            "group": "neptunium",
            "name": "hen_236",
            "forge_energy": 720,
            "heat": 216,
            "criticality": 35,
            "depletion": 99,
            "efficiency": 115,
            "isotopes": [236, 237]
        },
        {
            "group": "neptunium",
            "name": "len_236",
            "forge_energy": 180,
            "heat": 36,
            "criticality": 70,
            "depletion": 99,
            "efficiency": 110,
            "isotopes": [236, 237]
        },
        {
            "group": "plutonium",
            "name": "hep_239",
            "forge_energy": 840,
            "heat": 240,
            "criticality": 49,
            "depletion": 229,
            "efficiency": 145,
            "isotopes": [239, 242]
        },
        {
            "group": "plutonium",
            "name": "hep_241",
            "forge_energy": 1320,
            "heat": 420,
            "criticality": 42,
            "depletion": 158,
            "efficiency": 130,
            "isotopes": [241, 242]
        },
        {
            "group": "plutonium",
            "name": "lep_239",
            "forge_energy": 210,
            "heat": 40,
            "criticality": 99,
            "depletion": 229,
            "efficiency": 150,
            "isotopes": [239, 242]
        },
        {
            "group": "plutonium",
            "name": "lep_241",
            "forge_energy": 330,
            "heat": 70,
            "criticality": 84,
            "depletion": 158,
            "efficiency": 125,
            "isotopes": [241, 242]
        },
        {
            "group": "thorium",
            "name": "tbu",
            "forge_energy": 120,
            "heat": 18,
            "criticality": 234,
            "depletion": 720,
            "efficiency": 125,
            "isotopes": [230, 232]
        },
        {
            "group": "uranium",
            "name": "heu_233",
            "forge_energy": 1152,
            "heat": 360,
            "criticality": 39,
            "depletion": 133,
            "efficiency": 115,
            "isotopes": [233, 238]
        },
        {
            "group": "uranium",
            "name": "heu_235",
            "forge_energy": 960,
            "heat": 300,
            "criticality": 51,
            "depletion": 240,
            "efficiency": 105,
            "isotopes": [235, 238]
        },
        {
            "group": "uranium",
            "name": "leu_233",
            "forge_energy": 288,
            "heat": 60,
            "criticality": 78,
            "depletion": 133,
            "efficiency": 110,
            "isotopes": [233, 238]
        },
        {
            "group": "uranium",
            "name": "leu_235",
            "forge_energy": 240,
            "heat": 50,
            "criticality": 102,
            "depletion": 240,
            "efficiency": 100,
            "isotopes": [235, 238]
        },
        {
            "group": "americium",
            "name": "hea_242",
            "forge_energy": 1536,
            "heat": 564,
            "criticality": 32,
            "depletion": 92,
            "efficiency": 140,
            "isotopes": [242, 243]
        },
        {
            "group": "americium",
            "name": "lea_242",
            "forge_energy": 384,
            "heat": 94,
            "criticality": 65,
            "depletion": 74,
            "efficiency": 135,
            "isotopes": [242, 243]
        }
    ]

    const nuclearFuelsReprocession = [
        {  
            "input": [
                {
                "item": "nuclearcraft:depleted_fuel_americium_hea_242_tr"
                }
            ],
            "output": [
                {
                "count": 3,
                "item": "nuclearcraft:americium_243"
                },
                {
                "item": "nuclearcraft:americium_242"
                },
                {
                "count": 2,
                "item": "nuclearcraft:curium_246"
                },
                {
                "item": "nuclearcraft:berkelium_247"
                },
                {
                "tag": "forge:dusts/molybdenum"
                },
                {
                "tag": "forge:dusts/promethium_147"
                }
            ]
        },
        {
              "input": [
                    {
                    "item": "nuclearcraft:depleted_fuel_americium_hea_242"
                    }
                ],
                "output": [
                    {
                    "count": 3,
                    "item": "nuclearcraft:americium_243"
                    },
                    {
                    "item": "nuclearcraft:americium_242"
                    },
                    {
                    "count": 2,
                    "item": "nuclearcraft:curium_246"
                    },
                    {
                    "item": "nuclearcraft:berkelium_247"
                    },
                    {
                    "tag": "forge:dusts/molybdenum"
                    },
                    {
                    "tag": "forge:dusts/promethium_147"
                    }
                ],
        },
        {
                "input": [
                    {
                    "item": "nuclearcraft:depleted_fuel_americium_lea_242_tr"
                    }
                ],
                "output": [
                    {
                    "count": 3,
                    "item": "nuclearcraft:americium_243"
                    },
                    {
                    "item": "nuclearcraft:curium_243"
                    },
                    {
                    "count": 3,
                    "item": "nuclearcraft:curium_246"
                    },
                    {
                    "item": "nuclearcraft:berkelium_248"
                    },
                    {
                    "tag": "forge:dusts/molybdenum"
                    },
                    {
                    "tag": "forge:dusts/promethium_147"
                    }
                ],
        },
        {
                "input": [
                    {
                    "item": "nuclearcraft:depleted_fuel_americium_lea_242"
                    }
                ],
                "output": [
                    {
                    "count": 3,
                    "item": "nuclearcraft:americium_243"
                    },
                    {
                    "item": "nuclearcraft:curium_243"
                    },
                    {
                    "count": 3,
                    "item": "nuclearcraft:curium_246"
                    },
                    {
                    "item": "nuclearcraft:berkelium_248"
                    },
                    {
                    "tag": "forge:dusts/molybdenum"
                    },
                    {
                    "tag": "forge:dusts/promethium_147"
                    }
                ],
        },
        {
                "input": [
                    {
                    "item": "nuclearcraft:depleted_fuel_berkelium_heb_248_tr"
                    }
                ],
                "output": [
                    {
                    "item": "nuclearcraft:berkelium_248"
                    },
                    {
                    "item": "nuclearcraft:californium_249"
                    },
                    {
                    "count": 2,
                    "item": "nuclearcraft:californium_251"
                    },
                    {
                    "count": 3,
                    "item": "nuclearcraft:californium_252"
                    },
                    {
                    "tag": "forge:dusts/ruthenium_106"
                    },
                    {
                    "tag": "forge:dusts/promethium_147"
                    }
                ],
        },
        {
                "input": [
                    {
                    "item": "nuclearcraft:depleted_fuel_berkelium_heb_248"
                    }
                ],
                "output": [
                    {
                    "item": "nuclearcraft:berkelium_248"
                    },
                    {
                    "item": "nuclearcraft:californium_249"
                    },
                    {
                    "count": 2,
                    "item": "nuclearcraft:californium_251"
                    },
                    {
                    "count": 3,
                    "item": "nuclearcraft:californium_252"
                    },
                    {
                    "tag": "forge:dusts/ruthenium_106"
                    },
                    {
                    "tag": "forge:dusts/promethium_147"
                    }
                ],
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},

    ]

    function fuelRecreation(fuel) {

    }

    function fuelAssembly(fuel) {
        let fuelGroup = fuel.group;
        let fuelName = fuel.name;
        let netHeat = fuel.heat;
        let criticality = fuel.criticality;
        let efficiency = fuel.efficiency;
        let type = fuel.name.charAt(0)

        let output = "nuclearcraft:fuel_"+fuelGroup+"_"+fuelName
        let criticalityRate = (netHeat + criticality + efficiency) / 5
        let power;
        let duration;
        let fluid;
        let count;
        let fuelIng1;
        let fuelIng2; 
        if (criticalityRate <= 60) {
            power = GTValues.VA[GTValues.IV]
            duration = 280
            fluid = "gtceu:distilled_water 72"
        } else if (criticalityRate > 60) {
            power = GTValues.VA[GTValues.LuV]
            duration = 340
            fluid = "gtceu:helium 72"
        } else if (criticalityRate > 60 && criticalityRate < 100) {
            power = GTValues.VA[GTValues.ZPM]
            duration = 370
            fluid = "gtceu:helium 288"
        } else if (criticalityRate > 150 && criticalityRate < 175) {
            power = GTValues.VA[GTValues.UV]
            duration = 490
            fluid = "gtceu:liquid_helium 36"
        } else if (criticalityRate > 175) {
            power = GTValues.VA[GTValues.UEV]
            duration = 1440
            fluid = "gtceu:liquid_helium 144"
        }

        if (type == "l") {
        fuelIng1 = "2x nuclearcraft:"+fuelGroup+"_"+fuel.isotopes[0];
        fuelIng2 = "9x nuclearcraft:"+fuelGroup+"_"+fuel.isotopes[1];
        } else if (type == "h") {
        fuelIng1 = "5x nuclearcraft:"+fuelGroup+"_"+fuel.isotopes[0];
        fuelIng2 = "12x nuclearcraft:"+fuelGroup+"_"+fuel.isotopes[1];
        } else {
        fuelIng1 = "1x nuclearcraft:"+fuelGroup+"_"+fuel.isotopes[0];
        fuelIng2 = "8x nuclearcraft:"+fuelGroup+"_"+fuel.isotopes[1];
        }

        event.recipes.gtceu.fuel_assembler(output)
        .chancedInput('gtceu:neutron_reflector', 30, 0)
        .chancedInput('gtceu:ball_casting_mold', 500, 0)
        .itemInputs(
            fuelIng1,
            fuelIng2,
            "gtceu:universal_fluid_cell"
        )
        .inputFluids("gtceu:soldering_alloy 144", fluid)
        .itemOutputs(output)
        .duration(duration)
        .EUt(power)

    }

    function fuelCentrifuge() {

    }
    
    function fuelEnrichment(fuel) {
        let fuelGroup = fuel.group;
        let fuelName = fuel.name;




        const types = [
            ["ox", "oxygen", GTValues.VA[GTValues.IV], 200],
            ['za', "zircaloy", GTValues.VA[GTValues.UV], 700],
            ['ni', 'nickel', GTValues.VA[GTValues.ZPM], 350]
        ]

        for (let i = 0; i < types.length; i++) {

            let output = "nuclearcraft:fuel_"+fuelGroup+"_"+fuelName + "_" +types[i][0]
            console.log("Fuel "+output+" had been registered!")
            event.recipes.gtceu.canner(output)
                .chancedInput('gtceu:neutron_reflector', types[i][3], -200)
                .itemInputs("nuclearcraft:fuel_"+fuelGroup+"_"+fuelName)
                .inputFluids("gtceu:" + types[i][1]+" 1296")
                .itemOutputs(output)
                .duration(1200)
                .EUt(types[i][2])
        }
    }

    nuclearFuels.forEach(fuelAssembly)
    nuclearFuels.forEach(fuelEnrichment)

    






})