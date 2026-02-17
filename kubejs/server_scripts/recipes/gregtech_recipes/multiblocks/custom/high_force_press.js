/*
    4 tiers of rotors:
    - -IV - 0
    - IV-Late LuV - 1
    - ZPM - UV - 2
    - +UHV - 3

    Notes: 
    - Needs Balancing
*/
const metalRotors = [
    
    ['titanium', 0],
    ['stainless_steel', 0],
    ['chromium', 0],
    ['steel', 0],
    ['rose_gold', 0],
    ['iron', 0],
    ['ultimet', 0],
    ['osmium', 0],
    ['wrought_iron', 0],
    ['cobalt_brass', 0],
    ['bismuth_bronze', 0],
    ['aluminium', 0],
    ['invar', 0],
    ['bronze', 0],
    ['manganese', 0],
    ['black_bronze', 0],
    ['neodymium', 0],
    ['brass', 0],
    ['magnalium', 0],
    ['sterling_silver', 0],

    ['tungsten_steel', 1],
    ['tungsten_carbide', 1],
    ['tungsten', 1],
    ['naquadah_alloy', 1],
    ['hsss', 1],
    ['iridium', 1],
    ['vanadium_steel', 1],
    ['osmiridium', 1],
    ['hsse', 1],
    ['hssg', 1],

    ['tritanium', 2],
    ['rhodium_plated_palladium', 2],
    ['naquadah', 2], //Change

    ['neutronium', 3],

]

function rotor(metal, metalRating) {
    ServerEvents.recipes(event => {
        if (metalRating == 0) {
            event.recipes.gtceu.high_force_press(metal + "_rotor")
                .inputFluids('gtceu:lubricant 1250')
                .duration(2400)
                .itemInputs(
                    "4x gtceu:" + metal+ "_screw",
                    "8x gtceu:" + metal+ "_turbine_blade",
                    "8x gtceu:long_" + metal+ "_rod",
                    "16x gtceu:small_" + metal+ "_dust",
                    "16x gtceu:" + metal+ "_ring",
                    "4x gtceu:" + metal+ "_screw"
                )
                .itemOutputs(Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:' + metal +'"}}'))
                .EUt(GTValues.VA[GTValues.HV])
        } else if (metalRating == 1) {
            event.recipes.gtceu.high_force_press(metal + "_rotor")
                .inputFluids('gtceu:lubricant 2500')
                .duration(2400)
                .itemInputs(
                    "6x gtceu:" + metal+ "_screw",
                    "8x gtceu:" + metal+ "_turbine_blade",
                    "8x gtceu:long_" + metal+ "_rod",
                    "24x gtceu:small_" + metal+ "_dust",
                    "24x gtceu:" + metal+ "_ring",
                    "6x gtceu:" + metal+ "_screw"
                )
                .itemOutputs(Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:' + metal +'"}}'))
                .EUt(GTValues.VA[GTValues.IV])
        } else if (metalRating == 2) {
            event.recipes.gtceu.high_force_press(metal + "_rotor")
                .inputFluids('gtceu:lubricant 5000')
                .duration(2400)
                .itemInputs(
                    "12x gtceu:" + metal+ "_screw",
                    "8x gtceu:" + metal+ "_turbine_blade",
                    "8x gtceu:long_" + metal+ "_rod",
                    "32x gtceu:small_" + metal+ "_dust",
                    "32x gtceu:" + metal+ "_ring",
                    "12x gtceu:" + metal+ "_screw"
                )
                .itemOutputs(Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:' + metal +'"}}'))
                .EUt(GTValues.VA[GTValues.ZPM])
        } else if (metalRating == 3) {
            event.recipes.gtceu.high_force_press(metal + "_rotor")
                .inputFluids('gtceu:lubricant 64000')
                .duration(2400)
                .itemInputs(
                    "16x gtceu:" + metal+ "_screw",
                    "8x gtceu:" + metal+ "_turbine_blade",
                    "8x gtceu:long_" + metal+ "_rod",
                    "64x gtceu:small_" + metal+ "_dust",
                    "64x gtceu:" + metal+ "_ring",
                    "16x gtceu:" + metal+ "_screw"
                )
                .itemOutputs(Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:' + metal +'"}}'))
                .EUt(GTValues.VA[GTValues.UHV])
        } else {
            console.error("Rotor Recipe using metal" + metal + " is broken!")
        }

        event.remove('gtceu:assembler/assemble_'+metal+'_turbine_blade')
    })
}

for (let i = 0; i < metalRotors.length; i++) {
    rotor(metalRotors[i][0], metalRotors[i][1])
}




 


