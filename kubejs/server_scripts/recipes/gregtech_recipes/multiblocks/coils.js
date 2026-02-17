ServerEvents.recipes(event => {
    const gt = event.recipes.gtceu

    function coils(element_1, element_2, elementFluid_3, energy, seconds) {
        gt.assembler('gtceu:' + element_1 + "_coil_block")
        .itemInputs(
            '8x gtceu:' + element_1 + "_double_wire", 
            '8x gtceu:' + element_2 + "_foil", 
        )
        .inputFluids("gtceu:"+elementFluid_3+" 144")
        .itemOutputs('kubejs:' + element_1 + "_coil_block")
        .EUt(energy)
        .duration(seconds * 20)
    }

    coils('bismuth_bronze', 'black_bronze', 'copper', GTValues.VA[GTValues.MV], 20)
    coils('neodyte', 'platinum', 'rhodium', GTValues.VA[GTValues.LuV], 60)
    coils('disamarium_nickel_cobaltite', 'osmium', 'niobium', GTValues.VA[GTValues.IV], 40)

})