function solarPanel(powerTier, amperage, tier, material) {
    const powers = [
        [GTValues.MV, 'aqua()'],
        [GTValues.HV, 'gold()'],
        [GTValues.IV, 'blue()'],
        [GTValues.LuV, 'magenta()'],
        [GTValues.ZPM, 'red()'],
        [GTValues.UV, 'green()'],
        [GTValues.UHV, 'dark_red()']
    ]
    let resistance = tier * 1.8;
    let tool;
    let color;
    if (resistance < 5) {
        tool = 'minecraft:needs_iron_tool'
    } else if (resistance > 5 && resistance < 10) {
        tool = 'minecraft:needs_diamond_tool'
    } else if (resistance > 10) {
        tool = 'forge:needs_netherite_tool'
    }
    for (let i = 0; i < powers.length; i++) {
        if (powerTier > powers[i][0]) {
            color = powers[i][1]
            break
        } else {continue}
    }



    StartupEvents.registry('block', event => {
        event.create(material+'_solar_panel')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(tool)
        .box(0,0,0,1,0.6,1,false)
        .texture(Direction.UP,'kubejs:block/panels/'+tier+"_top")
        .texture(Direction.NORTH,'kubejs:block/panels/side')
        .texture(Direction.WEST,'kubejs:block/panels/side')
        .texture(Direction.SOUTH,'kubejs:block/panels/side')
        .texture(Direction.EAST,'kubejs:block/panels/side')
        .texture(Direction.DOWN,'kubejs:block/panels/bottom')
        .hardness(tier * 2.5)
        .resistance(tier * 1.8)
        .soundType('metal')
        .noValidSpawns(true)
    })
    StartupEvents.registry('item', event => {
        event.create(material+'_photovoltaic_cell')
        .texture('kubejs:item/panels/'+material+'_photovoltaic_cell')
    })
}

solarPanel(
    GTValues.MV,
    2,
    2,
    "sterling_silver"
)
