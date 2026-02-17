GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:zirconium", vein => {
        vein.weight(20)
        vein.clusterSize(30)
        vein.density(0.1)
        vein.discardChanceOnAirExposure(0)

        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        vein.heightRangeUniform(-60, -10)

        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Zirconium, 4)
            .rareBlock(GTMaterials.Dysprosium, 1) 
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) 
            .maxEdgeRoundoff(0.2) 
        )

       vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("iron")) //dysprosium
            .placement("above")
       )
    })
})