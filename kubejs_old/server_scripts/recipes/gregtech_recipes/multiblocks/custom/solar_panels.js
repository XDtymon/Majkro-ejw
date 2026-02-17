ServerEvents.recipes(event => {
    event.recipes.gtceu.solar_array_generator('gtceu:solar_lv')
    .inputFluids("gtceu:distilled_water 8")
    .addData("RequiredTemp", 900)
    .duration(80)
    .EUt(-GTValues.V[GTValues.LV])
})