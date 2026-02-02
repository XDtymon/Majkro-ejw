ServerEvents.recipes(event => {

    const $power = [
        32, 128, 512, 4096
    ]

    const $items = [
        ['nickel_cobaltite', '128'],
        ['dysprosium', '512']
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
            event.recipes.gtceu.polarizer('gtceu:magnetic_' + $items[i][0] +'_ingot')
                .itemInputs('gtceu:' + $items[i][0] +'_ingot')
                .itemOutputs('gtceu:magnetic_' + $items[i][0] +'_ingot')
                .duration(56)
                .EUt($items[i][1])
            
        }


})