ServerEvents.recipes(event => {
    const gt = event.recipes.gtceu
    //Normal - 1, Sterile - 2, None - 0
    function circuitAssembler(inputs, fluidInput, output, energy, duration, cleanroom) {
        if (cleanroom == 2) {
            event.recipes.gtceu.circuit_assembler(output)
                .itemInputs(inputs)
                .inputFluids(fluidInput)
                .itemOutputs(output)
                .duration(duration)
                .EUt(energy)
                .cleanroom(CleanroomType.STERILE_CLEANROOM)
        } else if (cleanroom == 1) {
            event.recipes.gtceu.circuit_assembler(output)
                .itemInputs(inputs)
                .inputFluids(fluidInput)
                .itemOutputs(output)
                .duration(duration)
                .EUt(energy)
                .cleanroom(CleanroomType.CLEANROOM)
        } else if (cleanroom == 0) {
            event.recipes.gtceu.circuit_assembler(output)
                .itemInputs(inputs)
                .inputFluids(fluidInput)
                .itemOutputs(output)
                .duration(duration)
                .EUt(energy)
        } else {
            console.error("Recipe " + output + " is broken!, " + cleanroom)
        }
    }

    circuitAssembler(
        [
            'ae2:printed_logic_processor',
            'gtceu:yellow_glass_lens',
            '2x #gtceu:circuits/iv',
            '8x gtceu:fine_platinum_wire',
            'gtceu:double_annealed_copper_plate'
        ],
        ["gtceu:lutetium 72"],
        'ae2:logic_processor',
        GTValues.VA[GTValues.LuV],
        480,
        1

    )
    circuitAssembler(
        [
            'ae2:printed_calculation_processor',
            'gtceu:cyan_glass_lens',
            '2x #gtceu:circuits/iv',
            '8x gtceu:fine_osmiridium_wire',
            'gtceu:double_annealed_copper_plate'
        ],
        ["gtceu:lutetium 72"],
        'ae2:calculation_processor',
        GTValues.VA[GTValues.LuV],
        480,
        1

    )
    circuitAssembler(
        [
            'ae2:printed_engineering_processor',
            'gtceu:blue_glass_lens',
            '2x #gtceu:circuits/iv',
            '8x gtceu:fine_iridium_wire',
            'gtceu:double_annealed_copper_plate'
        ],
        ["gtceu:lutetium 72"],
        'ae2:engineering_processor',
        GTValues.VA[GTValues.LuV],
        480,
        1
    )
})