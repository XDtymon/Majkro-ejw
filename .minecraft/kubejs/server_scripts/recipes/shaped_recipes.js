ServerEvents.recipes(event => {







    
    event.shaped('create:electron_tube', [
        ' G ',
        'NWN',
        'PRP'
        ], {
            G: 'gtceu:glass_tube',
            N: 'minecraft:iron_nugget',
            W: 'gtceu:copper_single_wire',
            R: 'create:rose_quartz',
            P: 'gtceu:iron_plate'
        }
    )

    event.shaped('create:rose_quartz', [
        'QRR',
        'RRR',
        'RRR'
        ], {
            Q: 'gtceu:quartzite_gem',
            R: 'minecraft:redstone_dust'
        }
    )

    event.shaped('create:deployer', [
        ' C ',
        ' A ',
        ' H '
        ], {
            C: 'create:cogwheel',
            A: 'create:andesite_casing',
            H: 'create:brass_hand'
        }
    )

    event.shaped('2x create:redstone_link', [
        '   ',
        'SCE',
        '   '
        ], {
            S: 'gtceu:lv_sensor',
            E: 'gtceu:lv_emitter',
            C: 'create:redstone_link'
        }
    )

    event.shaped('2x create:display_link', [
        '   ',
        'SCE',
        '   '
        ], {
            S: 'gtceu:lv_sensor',
            E: 'gtceu:lv_emitter',
            C: 'create:display_board'
        }
    )

    event.shaped('2x create:stock_link', [
        '   ',
        'SCE',
        '   '
        ], {
            S: 'gtceu:lv_sensor',
            E: 'gtceu:lv_emitter',
            C: 'create:chute'
        }
    )
})