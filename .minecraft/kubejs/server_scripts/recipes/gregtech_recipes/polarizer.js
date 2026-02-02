ServerEvents.recipes(event => {

    const $power = [
        32, 128, 512, 4096
    ]
    //Input Output EU/t Time(t)
    const $items = [
        ['gtceu:nickel_cobaltite_ingot', 'gtceu:magnetic_nickel_cobaltite_ingot', '128' , '56'],
        ['gtceu:dysprosium_ingot', 'gtceu:magnetic_dysprosium_ingot', '512', '56'],
        ['3x gtceu:small_magnetic_dysprosium_dust', 'gtceu:small_highly_magnetic_dysprosium_dust', '262144', '384']
    ]



        for (let i = 0; i < $items.length; i++) {
                /*
                const $item_input_types = [
                    [('gtceu:' + $items[i][0] + '_ingot'), 56],
                    [('gtceu:' + $items[i][0] + '_dust'), 56],
                    [('gtceu:tiny_' + $items[i][0] + '_dust'), 6],
                    [('gtceu:small_' + $items[i][0] + '_dust'), 10],
                    [('gtceu:' + $items[i][0] + '_nugget'), 6],
                    [('gtceu:' + $items[i][0] + '_rod'), 28],
                    [('gtceu:' + $items[i][0] + '_block'), 504]
                */
            event.recipes.gtceu.polarizer($items[i][1])
                .itemInputs($items[i][0])
                .itemOutputs($items[i][1])
                .duration($items[i][3])
                .EUt($items[i][2])
            
        }
})