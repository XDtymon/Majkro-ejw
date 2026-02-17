


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('fuel_assembler')
    .category('fuel_assembler')
    .setMaxIOSize(9, 1, 3, 0)
    .setEUIO('in')
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC)
    event.create('fuel_centrifuge')
    .category('fuel_centrifuge')
    .setMaxIOSize(1, 9, 0, 0)
    .setEUIO('in')
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {


    
    event.create('fuel_assembler', 'simple')
    .tiers(
        GTValues.IV,
        GTValues.LuV, 
        GTValues.ZPM, 
        GTValues.UV, 
        GTValues.UHV, 
        GTValues.UEV, 
        GTValues.UIV
    )
    .definition((tier, builder) =>
    builder 
    .langValue(GTValues.VLVH[tier] + ' Nuclear Fuel Assembler')
    .recipeType("fuel_assembler")
    )

    event.create('fuel_centrifuge', 'simple')
    .tiers(
        GTValues.IV,
        GTValues.LuV, 
        GTValues.ZPM, 
        GTValues.UV, 
        GTValues.UHV, 
        GTValues.UEV, 
        GTValues.UIV
    )
    .definition((tier, builder) =>
    builder 
    .langValue(GTValues.VLVH[tier] + ' Nuclear Fuel Reprocessor')
    .recipeType("fuel_centrifuge")
    )
})