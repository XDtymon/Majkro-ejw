ServerEvents.recipes(event => {
    event.recipes.gtceu.arc_polarization_factory()
        .inputFluids(Fluid.of('gtceu:neodyte', 144), Fluid.of('gtceu:liquid_helium', 1250))
        .outputFluids(Fluid.of('gtceu:magnetic_neodyte', 144))
        .duration(5800)
        .EUt(GTValues.VA[GTValues.LuV])
        .addData("RequiredTemp", 5400) 


})