
//Imports

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $WireProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const $HazardProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty');

function subItemGenerator(metal, plate, foil, ring, dense_plate, rod, long_rod, gear, small_gear, round, frame) {
    if (plate) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_PLATE)}
    if (foil) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_FOIL)}
    if (ring) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_RING)}
    if (dense_plate) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_DENSE)}
    if (rod) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_ROD)}
    if (long_rod) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_LONG_ROD)}
    if (gear) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_GEAR)}
    if (small_gear) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)}
    if (round) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_ROUND)}
    if (frame) {GTMaterials.get(metal).addFlags(GTMaterialFlags.GENERATE_FRAME)}
}

GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("dysprosium")
        .protons(66)
        .neutrons(92)
        .symbol("Dy")
    event.create("zircon")
        .protons(40)
        .neutrons(50)
        .symbol("Zr")
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("zircaloy")
        .ingot().fluid()
        .color(0xBAB875).iconSet("dull")
        .formula("Zr3Zn6Sn8")
        .components('3x zircon', '6x zinc', '8x tin')
        .cableProperties(131072, 6, 0, true)
        .blastTemp(9200, "higher", GTValues.VA[GTValues.ZPM], 1800)
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_FRAME)
    event.create("zircon")
        .ingot().fluid()
        .color(0xC9A814).iconSet("dull")
        //.element(GTElements.get("zircon"))
        .formula("Zr")
        .blastTemp(8900, "higher", GTValues.VA[GTValues.ZPM], 1600)
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)
 
    /*event.create("zirconium")
        .gem().dust()
        .color(0xC96E14).iconSet("gem")
        .formula("ZrSiO4")
        .components('silicon', '4x oxygen') //'zircon', 
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_FRAME)*/
    event.create("neodyte")
        .ingot().fluid()
        .color(0x0C051A).iconSet("metallic")
        .formula("(NdNq2)2Sm3")
        .cableProperties(32768, 6, 0, true)
        .components('3x samarium', '2x neodymium', '4x naquadah')
        .blastTemp(7400, "high", GTValues.VA[GTValues.LuV], 1600)
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)
    event.create("magnetic_neodyte")
        .ingot().fluid()
        .color(0x100624).iconSet("magnetic")
        .formula("(NdNq2)2Sm3")
        .cableProperties(32768, 8, 0, true)
        .blastTemp(7400, "high", GTValues.VA[GTValues.LuV], 1600)
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)
    event.create("disamarium_nickel_cobaltite")
        .ingot().fluid()
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
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME)
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

    subItemGenerator('niobium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('invar', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        true, //Gear
        true, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('iridium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        true, //Gear
        true, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('neodymium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('ultimet', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('osmium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('black_bronze', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('manganese', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('chromium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        true, //Round
        true //Frame
    )
    subItemGenerator('magnalium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('brass', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('bismuth_bronze', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('cobalt_brass', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        true //Frame
    )
    subItemGenerator('sterling_silver', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('tungsten_carbide', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('tungsten', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('vanadium_steel', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('hssg', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('naquadah', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
    subItemGenerator('neutronium', 
        true, //Plate
        true, //Foil
        true, //Ring
        false, //Dense
        true, //Rod
        true, //Long Rod
        false, //Gear
        false, //Small Gear
        false, //Round
        false //Frame
    )
})


