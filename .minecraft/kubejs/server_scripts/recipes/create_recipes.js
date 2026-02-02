ServerEvents.recipes(event => {

    event.recipes.create.milling([Item.of('gtceu:raw_rubber_dust').withChance(0.5)], 'gtceu:sticky_resin')
    event.recipes.create.milling([Item.of('gtceu:quartz_sand_dust').withChance(0.8)], 'minecraft:sand')
    event.recipes.create.milling([Item.of('gtceu:flint_dust').withChance(0.8)], 'minecraft:flint')



})