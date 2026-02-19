ServerEvents.recipes(event => {
    event.recipes.gtceu.solar_generator()
            .inputFluids('gtceu:distilled_water 4')
            .duration(40)
            .EUt(-GTValues.V[GTValues.MV])
            .addData("RequiredTemp", 2400) 
})
