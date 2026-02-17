
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("nickel_cobaltite")
        .itemInputs('gtceu:nickel_dust', 'gtceu:cobalt_dust')
        .itemOutputs("2x gtceu:nickel_cobaltite_dust")
        .duration(360)
        .EUt(24)
        .circuit(4)
    event.recipes.gtceu.mixer("ae2:fluix_crystal")
        .itemInputs('2x ae2:charged_certus_quartz_crystal', '2x minecraft:redstone', '2x ae2:certus_quartz_crystal')
        .inputFluids("gtceu:lanthanum 72")
        .itemOutputs("3x ae2:fluix_crystal")
        .duration(2400)
        .EUt(16384)
        .circuit(4)

})