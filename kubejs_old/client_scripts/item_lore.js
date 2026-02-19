ItemEvents.tooltip(event => {
    event.add('create_factory_logistics:fluid_mechanism', Text.of('LV-Tier Mechanism').red())
    event.add('create:precision_mechanism', Text.of('MV-Tier Mechanism').red())

    function panels (powerTier, amperage, id) {
        event.addAdvanced(id, (item, advanced, text) => {
            // shift, alt and ctrl are all keys you can check!
            if (!event.shift) {
                text.add(1, [Text.of('Hold ').gray(), Text.of('Shift ').gray(), Text.of('to see more info.').gray()])
            } else {
                text.add(1, Text.of("Voltage: ").yellow() + Text.of(GTValues.V[powerTier] + "V").white() + " ("+Text.of(powerTier).white()+")")
                text.add(2, Text.of("Amperage: ").yellow() + Text.of(amperage+ "A").white())
            }
        })
    }

    panels(GTValues.MV, 2, 'kubejs:solar_polar_1')

    function fluidGregificator(fluid, temp, symbol) {
        if (symbol != null) {
            event.add(fluid, Text.of(symbol).yellow())
        }
        event.add(fluid, Text.of('State: Liquid').green())
        if (temp != null) {
            temp = 293
            event.add(fluid, [
                Text.of('Temperature:').red(),
                Text.of(temp + " K").red(),
            ])
        }
    }
})