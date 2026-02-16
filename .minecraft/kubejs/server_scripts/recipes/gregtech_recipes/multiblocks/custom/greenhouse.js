ServerEvents.recipes(event => {

    function greenHouse(
        recipe_name,
        input_item,
        output_item,
        chanced_item_output,
        input_fluid,
        output_fluid,
        energy,
        circuit,
        duration,
        temperature
    ) {
        console.log(input_item)
        event.recipes.gtceu.greenhouse(recipe_name)//(output_item[0])
        .itemInputs(input_item)
        .itemOutputs(output_item[0], output_item[1])
        .chancedOutput(chanced_item_output[0], chanced_item_output[1], chanced_item_output[2])
        .inputFluids(input_fluid)
        .outputFluids(output_fluid)
        .duration(duration)
        .EUt(energy)
        .addData("RequiredTemp", temperature) 
        .circuit(circuit)

    }

    function crop(item, index, arr) {
        let crop = arr[index][0]
        let crop_seed = arr[index][1]
        let fluid = arr[index][2]
        greenHouse(
            crop+"_1",
            ["minecraft:"+crop_seed],
            ["8x minecraft:"+crop, "minecraft:"+crop_seed],
            [("minecraft:"+crop_seed), 1200, 600],
            'minecraft:water 500',
            fluid[0],
            GTValues.VA[GTValues.HV],
            1,
            400,
            5200
        )
        greenHouse(
            crop+"_3",
            ["minecraft:"+crop_seed, "gtceu:fertilizer"],
            ["16x minecraft:"+crop, "minecraft:"+crop_seed],
            [("minecraft:"+crop_seed), 1200, 600],
            'minecraft:water 500',
            fluid[1],
            GTValues.VA[GTValues.HV],
            3,
            200,
            7800
        )
    }

    function bigCrop(item, index, arr) {
        let crop = arr[index][0]
        let crop_seed = arr[index][1]
        let fluid = arr[index][2]
        greenHouse(
            crop+"_1",
            ["minecraft:"+crop_seed],
            ["8x minecraft:"+crop, "minecraft:"+crop_seed],
            [("minecraft:"+crop_seed), 1200, 600],
            'minecraft:water 2500',
            fluid[0],
            GTValues.VA[GTValues.HV],
            1,
            460,
            6800
        )
        greenHouse(
            crop+"_3",
            ["minecraft:"+crop_seed, "gtceu:fertilizer"],
            ["16x minecraft:"+crop, "minecraft:"+crop_seed],
            [("minecraft:"+crop_seed), 1200, 600],
            'minecraft:water 2500',
            fluid[1],
            GTValues.VA[GTValues.HV],
            3,
            300,
            8900
        )
    }

    function tree(item, index, arr) {
        let treeType = arr[index]
        greenHouse(
            treeType+"_1",
            ["minecraft:"+treeType+"_sapling"],
            ["24x minecraft:"+treeType+"_log", "minecraft:"+treeType+"_sapling"],
            [("minecraft:"+treeType+"_sapling"), 1200, 600],
            'minecraft:water 500',
            'gtceu:wood_vinegar 3',
            GTValues.VA[GTValues.HV],
            1,
            500,
            5200
        )
        greenHouse(
            treeType+"_3",
            ["minecraft:"+treeType+"_sapling", "gtceu:fertilizer"],
            ["64x minecraft:"+treeType+"_log", "minecraft:"+treeType+"_sapling"],
            [("minecraft:"+treeType+"_sapling"), 2400, 1600],
            'minecraft:water 500',
            'gtceu:wood_vinegar 8',
            GTValues.VA[GTValues.HV],
            3,
            300,
            7850
        )
    }

    const trees = [
        'acacia',
        'oak',
        'spruce',
        'birch',
        'jungle',
        'dark_oak',
        'cherry'
    ].forEach(tree)

    const crops = [
        ['beetroot', 'beetroot_seeds', ['gtceu:methane 2', 'gtceu:methane 8']],
        ['wheat', 'wheat_seeds', ['gtceu:methane 2', 'gtceu:methane 8']],
        ['carrot', 'carrot', ['gtceu:methane 1', 'gtceu:methane 6']],
        ['glow_berries', 'glow_berries', ['gtceu:methane 6', 'gtceu:methane 24']],
        ['sweet_berries', 'sweet_berries', ['gtceu:methane 6', 'gtceu:methane 24']]
    ].forEach(crop)

    const bigCrops = [
        ['pumpkin', 'pumpkin_seeds', ['gtceu:methane 8', 'gtceu:methane 20']],
        ['melon', 'melon_seeds', ['gtceu:methane 8', 'gtceu:methane 20']],
        ['chorus_fruit', 'chorus_flower', ['gtceu:ender_air 120', 'gtceu:ender_air 400']],
    ].forEach(bigCrop)

})