GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('high_pressure_steam')
      .plasma()
      .color(0x8C6E24)
    event.create('magmatic_steam')
      .plasma()
      .color(0x8C2B24)
    event.create('earth_core_fluid_remains')
      .fluid()
      .color(0x7A6A6A)

})