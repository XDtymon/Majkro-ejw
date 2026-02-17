ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/lv', 'create_factory_logistics:fluid_mechanism')
    event.add('gtceu:diodes', 'create:electron_tube')
    event.add('gtceu:circuits/mv', 'create:precision_mechanism')
    event.remove('gtceu:circuits/lv', 'gtceu:basic_electronic_circuit')
    event.remove('gtceu:circuits/mv', 'gtceu:good_electronic_circuit')
    event.remove('forge:hidden_from_recipe_viewers', 'create:shadow_steel')
    event.remove('forge:hidden_from_recipe_viewers', 'create:refined_radiance')


    const powers = [
        'lv',
        'mv',
        'hv',
        'ev'
    ]
    for (let i = 0; i < powers.length; i++) {
        event.add('gtceu:dynamos', ('gtceu:' + powers[i] + '_energy_output_hatch'))
    }
})