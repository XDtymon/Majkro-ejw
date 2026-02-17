ServerEvents.recipes(event => {

    event.recipes.gtceu.autoclave("charged_certus_quartz_crystal")
        .itemInputs("4x gtceu:certus_quartz_crystal")
        .inputFluids("gtceu:ruthenium 72")
        .itemOutputs("2x ae2:charged_certus_quartz_crystal")
        .duration(1200)
        .EUt(16384)
    event.recipes.gtceu.autoclave("fluix_ender_pearl")
        .itemInputs("minecraft:ender_pearl")
        .inputFluids("gtceu:europium 72")
        .itemOutputs("ae2:fluix_ender_pearl")
        .duration(1200)
        .EUt(16384)

})