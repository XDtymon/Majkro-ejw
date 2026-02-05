
//Imports

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $WireProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const $HazardProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty');



GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("dysprosium")
        .protons(66)
        .neutrons(92)
        .symbol("Dy")
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("neodyte")
        .ingot().fluid()
        //.element(GTElements.get("nickel_cobaltite"))
        .color(0x0C051A).iconSet("metallic")
        .formula("(NdNq2)2Sm3")
        .cableProperties(32768, 6, 0, true)
        .components('3x samarium', '2x neodymium', '4x naquadah')
        .blastTemp(7400, "high", GTValues.VA[GTValues.LuV], 1600)
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    event.create("magnetic_neodyte")
        .ingot().fluid()
        //.element(GTElements.get("nickel_cobaltite"))
        .color(0x100624).iconSet("magnetic")
        .formula("(NdNq2)2Sm3")
        .cableProperties(32768, 8, 0, true)
        .blastTemp(7400, "high", GTValues.VA[GTValues.LuV], 1600)
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    event.create("disamarium_nickel_cobaltite")
        .ingot().fluid()
        .components('2x samarium', '3x nickel', '3x cobalt')
        //.element(GTElements.get("nickel_cobaltite"))
        .color(0x1B5952).iconSet("metallic")
        .cableProperties(8192, 6, 0, true)
        .formula("Sm2(NiCo)3")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    event.create("magnetic_disamarium_nickel_cobaltite")
        .ingot().fluid()
        //.element(GTElements.get("nickel_cobaltite"))
        .color(0x155C5E).iconSet("magnetic")
        .formula("Sm2(NiCo)3")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    event.create("nickel_cobaltite")
        .ingot().fluid()
        //.element(GTElements.get("nickel_cobaltite"))
        .color(0x012C34).iconSet("metallic")
        .formula("NiCo")
        .components('nickel', 'cobalt')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    event.create("magnetic_nickel_cobaltite")
        .ingot().fluid()
        //.element(GTElements.get("nickel_cobaltite"))
        .color(0x024C34).iconSet("magnetic")
        .formula("NiCo")
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR)
    event.create("magnetic_dysprosium")
        .ingot().fluid()
        .element(GTElements.get("dysprosium"))
        .color(0x556E08).iconSet("magnetic")
        .formula("Dy")
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR)
    event.create("highly_magnetic_dysprosium")
        .ingot().fluid()
        .element(GTElements.get("dysprosium"))
        .color(0x98C217).iconSet("magnetic")
        .formula("Dy(🧲)")
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR)
    event.create('aluminium_oxide')
        .dust()
        .color(0x4B94CC).iconSet("dull")
        .formula("Al2O3")
        .components('2x aluminium', '3x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)


    GTMaterials.Dysprosium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dysprosium.addFlags(GTMaterialFlags.GENERATE_ROD);
    GTMaterials.Dysprosium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD);
    GTMaterials.Dysprosium.setMaterialARGB(0xABBA5F) 

    GTMaterials.BismuthBronze.setProperty(PropertyKey.WIRE, new $WireProperty(128, 6, 0, true))
    GTMaterials.BismuthBronze.addFlags(GTMaterialFlags.GENERATE_FOIL);

    GTMaterials.BlackBronze.addFlags(GTMaterialFlags.GENERATE_FOIL);
    
    GTMaterials.Niobium.addFlags(GTMaterialFlags.GENERATE_FOIL);
    GTMaterials.Niobium.addFlags(GTMaterialFlags.GENERATE_ROD);
    GTMaterials.Niobium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD);
    GTMaterials.Niobium.addFlags(GTMaterialFlags.GENERATE_RING);

    /*event.create("dysprosium")
        .ingot().fluid()
        .element(GTElements.get("dysprosium"))
        .color(0xb3b300).iconSet("metallic")
        .formula("Dy")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
    */
})


GTCEuStartupEvents.materialModification(event => {
    
})