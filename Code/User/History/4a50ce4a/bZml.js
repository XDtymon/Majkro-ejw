ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:steam_generator", 1)
    .requireFunctionToStart(ctx => {
        level = 0
        level = ctx.machine.data.stress
        if (level = 0) { return ctx.error("Turn up the stress!") }
        return ctx.success()
    })
    .requireSU(96, 1 + level)
    .requireFluid(Fluid.of('minecraft:water', 2 * level))
    .produceFluidPerTick(Fluid.of('gtceu:steam', 10 * level))

    event.recipes.custommachinery.custom_machine("custommachinery:steam_generator", 1)
    .requireButtonPressed("plus")
    .requireFunctionToStart(ctx => {
        level = ctx.machine.data.stress
        if (level = 10) { return ctx.success() }
        level = 1 + level
        ctx.machine.data.stress = level
        
        return ctx.success()
    })

    event.recipes.custommachinery.custom_machine("custommachinery:steam_generator", 1)
    .requireButtonPressed("minus")
        .requireFunctionToStart(ctx => {
        level = ctx.machine.data.stress
        if (level = 0) { return ctx.success() }
        level = 1 - level
        ctx.machine.data.stress = level
        
        return ctx.success()
    })
})