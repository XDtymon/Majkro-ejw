ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        [
            'gtceu:vacuum_tube'
        ],
        [
            'gtceu:wrought_iron_bolt'
        ],
        [
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:wrought_iron_nugget"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:copper_single_wire"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "create:electron_tube"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:glass_tube"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:rubber_ring"])
        ]
    )
    .transitionalItem('gtceu:wrought_iron_bolt')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            '3x gtceu:vacuum_tube'
        ],
        [
        'gtceu:wrought_iron_bolt'
        ],
        [
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:wrought_iron_nugget"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:annealed_copper_single_wire"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "create:electron_tube"]),
            event.recipes.create.filling('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', Fluid.of('gtceu:red_alloy', 144)]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:glass_tube"]),
            event.recipes.create.deploying('gtceu:wrought_iron_bolt', ['gtceu:wrought_iron_bolt', "gtceu:rubber_ring"])
        ]
    )
    .transitionalItem('gtceu:wrought_iron_bolt')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            '2x create:electron_tube'
        ],
        [
            'gtceu:iron_bolt'
        ],
        [
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "minecraft:iron_nugget"]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "gtceu:copper_single_wire"]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "create:rose_quartz"]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "minecraft:iron_nugget"]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "gtceu:glass_tube"])
        ]
    )
    .transitionalItem('gtceu:iron_bolt')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            '4x create:electron_tube'
        ],
        [
            'gtceu:iron_bolt'
        ],
        [
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "minecraft:iron_nugget"]),
            event.recipes.create.filling('gtceu:iron_bolt', ['gtceu:iron_bolt', Fluid.of('gtceu:annealed_copper', 72)]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "gtceu:copper_single_wire"]),
            event.recipes.create.filling('gtceu:iron_bolt', ['gtceu:iron_bolt', Fluid.of('gtceu:red_alloy', 288)]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "gtceu:glass_tube"]),
            event.recipes.create.deploying('gtceu:iron_bolt', ['gtceu:iron_bolt', "gtceu:rubber_ring"])
        ]
    )
    .transitionalItem('gtceu:iron_bolt')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('create:steam_engine').withChance(0.85),
            Item.of('minecraft:copper_block').withChance(0.05),
            Item.of('4x minecraft:gold_ingot').withChance(0.05),
            Item.of('minecraft:clock').withChance(0.025),
            Item.of('16x create:andesite_alloy').withChance(0.025)

        ],
        [
            'gtceu:tin_rotor'
        ],
        [
            event.recipes.create.deploying('create:copper_casing', ['create:copper_casing', "create:copper_casing"]),
            event.recipes.create.deploying('create:copper_casing', ['create:copper_casing', "gtceu:wrought_iron_gear"]),
            event.recipes.create.deploying('create:copper_casing', ['create:copper_casing', "gtceu:double_copper_plate"]),
            event.recipes.create.deploying('create:copper_casing', ['create:copper_casing', "#gtceu:circuits/ulv"]),
            event.recipes.create.deploying('create:copper_casing', ['create:copper_casing', "gtceu:gold_foil"]),
            event.recipes.create.deploying('create:copper_casing', ['create:copper_casing', "gtceu:rubber_ring"])
        ]
    )
    .transitionalItem('create:copper_casing')
    .loops(8)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('create:precision_mechanism').withChance(0.85),
            Item.of('gtceu:wrought_iron_block').withChance(0.05),
            Item.of('3x gtceu:zinc_ingot').withChance(0.05),
            Item.of('gtceu:lv_sensor').withChance(0.025),
            Item.of('gtceu:lv_emitter').withChance(0.025)

        ],
        [
            'create_factory_logistics:fluid_mechanism'
        ],
        [
            event.recipes.create.filling('create_factory_logistics:fluid_mechanism', ['create_factory_logistics:fluid_mechanism', Fluid.of('gtceu:soldering_alloy', 288)]),
            event.recipes.create.deploying('create_factory_logistics:fluid_mechanism', ['create_factory_logistics:fluid_mechanism', "gtceu:iron_gear"]),
            event.recipes.create.deploying('create_factory_logistics:fluid_mechanism', ['create_factory_logistics:fluid_mechanism', "gtceu:magnetic_nickel_cobaltite_screw"]),
            event.recipes.create.deploying('create_factory_logistics:fluid_mechanism', ['create_factory_logistics:fluid_mechanism', "#gtceu:diodes"]),
            event.recipes.create.deploying('create_factory_logistics:fluid_mechanism', ['create_factory_logistics:fluid_mechanism', "gtceu:zinc_foil"]),
            event.recipes.create.deploying('create_factory_logistics:fluid_mechanism', ['create_factory_logistics:fluid_mechanism', "gtceu:rubber_ring"])
        ]
    )
    .transitionalItem('create_factory_logistics:fluid_mechanism')
    .loops(4)


    
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_factory_logistics:fluid_mechanism').withChance(0.85),
            Item.of('3x minecraft:copper_ingot').withChance(0.05),
            Item.of('1x minecraft:gold_ingot').withChance(0.05),
            Item.of('minecraft:compass').withChance(0.04),
            Item.of('1x create:precision_mechanism').withChance(0.01)

        ],
        [
            'gtceu:tin_rotor'
        ],
        [
            event.recipes.create.deploying('create:copper_valve_handle', ['create:copper_valve_handle', "create:copper_valve_handle"]),
            event.recipes.create.deploying('create:copper_valve_handle', ['create:copper_valve_handle', "#gtceu:circuits/ulv"]),
            event.recipes.create.deploying('create:copper_valve_handle', ['create:copper_valve_handle', "gtceu:rubber_ring"]),
            event.recipes.create.deploying('create:copper_valve_handle', ['create:copper_valve_handle', "gtceu:copper_screw"]),
            event.recipes.create.deploying('create:copper_valve_handle', ['create:copper_valve_handle', "gtceu:tin_bolt"]),
        ]
    )
    .transitionalItem('create:copper_valve_handle')
    .loops(2)

    const motor_materials = [
        //Plate               Foil          Nugget           Fine Wire              Rod         
        ['zinc',            'steel',     'wrought_iron',   'copper',            'magnetic_iron'],
        ['aluminium',       'cupronickel',    'chromium',         'annealed_copper',   'magnetic_nickel_cobaltite'],
        ['stainless_steel', 'electrum',  'silver',         'gold',              'magnetic_steel'],
        ['titanium',       'manganese',   'niobium',        'tantalum',          'magnetic_neodymium'],
    ]
 
    const emitter_materials = [
        ['gtceu:quartzite_gem', 'manganese_phosphide', 'brass', 'cupronickel', 'steel'],
        ['gtceu:flawless_emerald_gem', 'magnesium_diboride', 'electrum', 'cobalt', 'aluminium'],
        ['minecraft:ender_eye', 'mercury_barium_calcium_cuprate', 'stainless_steel', 'aluminium', 'stainless_steel'],
        ['gtceu:quantum_eye', 'uranium_triplatinum', 'molybedynium_disilicide', 'palladium', 'titanium'],
        ['gtceu:quantum_star', 'samarium_iron_arsenic_oxide', 'ruridit', 'niobium_titanium', 'tungsten']
    ]

    const sensor_materials = [
        ['gtceu:quartzite_gem', 'brass', 'steel', 'gtceu:tin', 288],
        ['gtceu:flawless_emerald_gem', 'electrum', 'aluminium', 'gtceu:polyethylene', 72],
        ['minecraft:ender_eye', 'stainess_steel', 'stainless_steel', 'gtceu:polytetrafluoroethylene', 72],
        ['gtceu:quantum_eye', 'palladium', 'titanium', 'gtceu:polytetrafluoroethylene', 72],
        ['gtceu:quantum_star', 'niobium_titanium', 'tungsten', 'gtceu:styrene_butadiene_rubber', 72]
    ]

    const pump_materials = [
        ['magnetic_iron', 'gtceu:rubber_ring', 'copper', 'steel', 'bronze'],

    ]

    const powers = [
        'lv',
        'mv',
        'hv', 
        'ev'
    ]
    const debug = 0



    //Motors LV-IV
    for (let i = 0; i < powers.length; i++) {
        let motor = 'gtceu:' + powers[i] + '_electric_motor'
        if (debug == 1) {
            console.log(motor)
            console.log('gtceu:' + motor_materials[i][0] + '_foil')
            console.log('gtceu:' + motor_materials[i][1] + '_plate')
            console.log('gtceu:' + motor_materials[i][2] + '_nugget')
            console.log('gtceu:fine_' + motor_materials[i][3] + '_wire')
            console.log("gtceu:" + motor_materials[i][4] + '_rod')
        } else {
             event.recipes.create.sequenced_assembly(
                 [ motor ],
                 [ ('gtceu:' + motor_materials[i][0] + '_plate')],
                [
                    event.recipes.create.deploying(motor, [motor, ('gtceu:' + motor_materials[i][1] + '_foil')]),
                    event.recipes.create.deploying(motor, [motor, ('gtceu:' + motor_materials[i][2] + '_nugget')]),
                    event.recipes.create.deploying(motor, [motor, ('gtceu:fine_' + motor_materials[i][3] + '_wire')]),
                    event.recipes.create.deploying(motor, [motor, ('gtceu:' + motor_materials[i][4] + '_rod')]),
                ]
            )
            .transitionalItem(motor)
            .loops(4)
        }
    }



    //emitters LV-IV
    for (let i = 0; i < powers.length; i++) {
        let emitter = 'gtceu:' + powers[i] + '_emitter'
        if (debug == 1) {
            console.log(emitter)
            console.log(emitter_materials[i][0])
            console.log('gtceu:fine_' + emitter_materials[i][3] + '_wire')
            console.log('gtceu:' + emitter_materials[i][2] + '_rod')
            console.log('gtceu:' + emitter_materials[i][1] + '_double_wire')
            console.log('gtceu:' + emitter_materials[i][4] + '_nugget')
        } else {
            event.recipes.create.sequenced_assembly(
                [ emitter ],
                [ emitter_materials[i][0] ],
                [
                    event.recipes.create.deploying(emitter, [emitter, ('gtceu:fine_' + emitter_materials[i][3] + '_wire')]),
                    event.recipes.create.deploying(emitter, [emitter, ('gtceu:' + emitter_materials[i][2] + '_rod')]),
                    event.recipes.create.deploying(emitter, [emitter, ('gtceu:' + emitter_materials[i][1] + '_double_wire')]),
                    event.recipes.create.deploying(emitter, [emitter, ('gtceu:' + emitter_materials[i][4] + '_nugget')]),
                ]
            )
            .transitionalItem(emitter)
            .loops(4)
        }
    }



    for (let i = 0; i < powers.length; i++) {
        let sensor = 'gtceu:' + powers[i] + '_sensor'
        if (debug == 1) {
            console.log(sensor)
            console.log(sensor_materials[i][0])
            console.log('gtceu:fine_' + sensor_materials[i][3] + '_wire')
            console.log('gtceu:' + sensor_materials[i][2] + '_rod')
            console.log('gtceu:' + sensor_materials[i][1] + '_double_wire')
            console.log('gtceu:' + sensor_materials[i][4] + '_nugget')
        } else {
            event.recipes.create.sequenced_assembly(
                [ sensor ],
                [ ('gtceu:' + powers[i] + '_machine_hull')],
                [
                    event.recipes.create.deploying(sensor, [sensor, ('gtceu:long_' + sensor_materials[i][1] + '_rod')]),
                    event.recipes.create.deploying(sensor, [sensor, ('gtceu:long_' + sensor_materials[i][1] + '_rod')]),
                    event.recipes.create.filling(sensor, [sensor, Fluid.of(sensor_materials[i][3], sensor_materials[i][4])]),
                    event.recipes.create.deploying(sensor, [sensor, (sensor_materials[i][0])]),
                    event.recipes.create.pressing(sensor, sensor)
                ]
            )
            .transitionalItem(sensor)
            .loops(4)
        }
    }



    for (let i = 0; i < powers.length - 3; i++) {
        let pump = 'gtceu:' + powers[i] + '_electric_pump'
        if (debug == 1) {
            console.log(pump)
            console.log(pump_materials[i][0])
            console.log('gtceu:fine_' + pump_materials[i][3] + '_wire')
            console.log('gtceu:' + pump_materials[i][2] + '_rod')
            console.log('gtceu:' + pump_materials[i][1] + '_double_wire')
            console.log('gtceu:' + pump_materials[i][4] + '_nugget')
        } else {
            event.recipes.create.sequenced_assembly(
                [ pump ],
                ['gtceu:' + powers[i] + '_electric_motor'],
                [
                    event.recipes.create.deploying(pump, [pump, pump_materials[i][1]]),
                    event.recipes.create.deploying(pump, [pump, 'gtceu:fine_' + pump_materials[i][2] + '_wire']),
                    event.recipes.create.deploying(pump, [pump,  'gtceu:' + pump_materials[i][0] + '_rod']),
                    event.recipes.create.deploying(pump, [pump, 'gtceu:' + pump_materials[i][3] + '_tiny_fluid_pipe']),
                    event.recipes.create.deploying(pump, [pump, 'gtceu:' + pump_materials[i][4] + '_screw'])
                ]
            )
            .transitionalItem(pump)
            .loops(4)
        }
    }
})