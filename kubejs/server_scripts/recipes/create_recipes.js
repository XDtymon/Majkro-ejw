ServerEvents.recipes(event => {

    event.recipes.create.milling([Item.of('gtceu:raw_rubber_dust').withChance(0.5)], 'gtceu:sticky_resin')
    event.recipes.create.milling([Item.of('gtceu:quartz_sand_dust').withChance(0.8)], 'minecraft:sand')
    event.recipes.create.milling([Item.of('gtceu:flint_dust').withChance(0.8)], 'minecraft:flint')

    



    function mixer(input, output, heat) {
        if (heat == 0) {
            event.recipes.create.mixing(
                output, 
                input
            )
        } else if (heat == 1) {
            event.recipes.create.mixing(
                output, 
                input
            ).heated()
        } else if (heat == 2) {
            event.recipes.create.mixing(
                output, 
                input
            ).superheated()
        }

    }


    mixer( //Bronze
        [
            "#forge:ingots/tin",
            "3x #forge:ingots/copper"
        ],
        [
            "4x gtceu:bronze_ingot"
        ],
        1
    )
    mixer( //Bronze
        [
            "#forge:ingots/zink",
            "3x #forge:ingots/copper"
        ],
        [
            "4x gtceu:brass_ingot"
        ],
        1
  
    )
    mixer( //Bronze
        [
            "#forge:ingots/iron",
            "3x minecraft:coal"
        ],
        [
            "gtceu:steel_ingot"
        ],
        2
    )
})