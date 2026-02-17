GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("dysprosium")
        .protons(66)
        .neutrons(92)
        .symbol("Dy")
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("nickel_cobaltite")
        .ingot().fluid()
        .element(GTElements.get("nickel_cobaltite"))
        .color(0x012C34).iconSet("metallic")
        .formula("NiCo")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    event.create("magnetic_nickel_cobaltite")
        .ingot().fluid()
        .element(GTElements.get("magnetic_nickel_cobaltite"))
        .color(0x024C34).iconSet("magnetic")
        .formula("NiCo")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD)












    /*event.create("dysprosium")
        .ingot().fluid()
        .element(GTElements.get("dysprosium"))
        .color(0xb3b300).iconSet("metallic")
        .formula("Dy")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    */
})