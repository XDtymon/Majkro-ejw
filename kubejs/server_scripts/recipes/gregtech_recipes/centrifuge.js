ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge("bone_meal_centrifuging")
            .itemInputs("minecraft:bone_meal")
            .chancedOutput("gtceu:small_calcium_phosphide_dust", 2500, 750)
            .chancedOutput("gtceu:tiny_collagen_dust", 500, 250)
            .chancedOutput("gtceu:tiny_magnesium_dust", 500, 250)
            .chancedOutput("gtceu:tiny_calcium_carbonate_dust", 500, 250)
            .duration(500)
            .EUt(24)
})
