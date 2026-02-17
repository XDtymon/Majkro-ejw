ItemEvents.tooltip(event => {
    event.add('create_factory_logistics:fluid_mechanism', Text.of('LV-Tier Mechanism').red())
    event.add('create:precision_mechanism', Text.of('MV-Tier Mechanism').red())



    event.addAdvanced('gtceu:high_temperature_turbine', (item, advanced, text) => {
        
        text.add(1, [
            Text.of('Base Production: ').yellow(), 
            Text.of('65536 EU/t').white()
        ])
        text.add(2, [
            Text.of('Each Rotor Holder Above').white(),
            Text.of('LuV').pink(), 
            Text.of('adds').gray(),
            Text.of('10% Efficiency and multiplies EU/t by 2').white()
        ])

    })

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