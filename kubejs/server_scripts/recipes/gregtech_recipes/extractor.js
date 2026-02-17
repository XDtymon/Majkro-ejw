ServerEvents.recipes(event => {
    event.recipes.gtceu.extractor("radaway_fluid")
        .itemInputs("gtceu:rad_away_dust")
        .outputFluids(Fluid.of('nuclearcraft:radaway', 250))
        .duration(320)
        .EUt(GTValues.VA[GTValues.HV])

})