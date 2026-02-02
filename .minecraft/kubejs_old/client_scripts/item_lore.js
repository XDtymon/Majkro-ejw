ItemEvents.tooltip(event => {
    event.add('create_factory_logistics:fluid_mechanism', Text.of('LV-Tier Mechanism').red())
    event.add('create:precision_mechanism', Text.of('MV-Tier Mechanism').red())





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