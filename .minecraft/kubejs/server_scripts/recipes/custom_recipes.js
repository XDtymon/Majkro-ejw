ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:steam_generator", 1)
    .requireSU(16, 12)
    .requireFluid(Fluid.of('minecraft:water', 24))
    .produceFluidPerTick(Fluid.of('gtceu:steam', 480))

    event.recipes.custommachinery.custom_machine("custommachinery:lv_kinetic_hatch", 120)
    .requireSU(512, 8)
    .requireFunctionOnStart(ctx => {
        
        
        
        
        return ctx.success()
    })
})