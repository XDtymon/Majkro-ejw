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

    //Other 

        greenHouse(
            "mangrove_1",
            ["minecraft:mangrove_propagule"],
            ["24x minecraft:mangrove_log", "minecraft:mangrove_propagule"],
            [("minecraft:mangrove_propagule"), 1200, 600],
            'minecraft:water 500',
            'gtceu:wood_vinegar 3',
            GTValues.VA[GTValues.HV],
            1,
            500,
            5200
        )
        greenHouse(
            "mangrove_3",
            ["minecraft:mangrove_propagule", "gtceu:fertilizer"],
            ["64x minecraft:mangrove_log", "minecraft:mangrove_propagule"],
            [("minecraft:mangrove_propagule"), 2400, 1600],
            'minecraft:water 500',
            'gtceu:wood_vinegar 8',
            GTValues.VA[GTValues.HV],
            3,
            300,
            7850
        )


    //Functions

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

    function flowers(item, index, arr) {
        let flower = arr[index]
        greenHouse(
            flower+"_1",
            ["minecraft:"+flower],
            ["32x minecraft:"+flower, "16x minecraft:"+flower],
            [("minecraft:"+flower), 1200, 1800],
            'minecraft:water 500',
            'gtceu:biomass 3',
            GTValues.VA[GTValues.MV],
            1,
            500,
            2400
        )
        greenHouse(
            flower+"_3",
            ["minecraft:"+flower, "gtceu:fertilizer"],
            ["64x minecraft:"+flower, "16x minecraft:"+flower],
            [("minecraft:"+flower), 3000, 1800],
            'minecraft:water 2500',
            'gtceu:biomass 8',
            GTValues.VA[GTValues.MV],
            3,
            300,
            3200
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
        ['sugar_cane', 'sugar_cane', ['gtceu:methane 8', 'gtceu:methane 16']],
        ['nether_wart', 'nether_wart', ['gtceu:nether_air 60', 'gtceu:nether_air 180']],
        ['glow_berries', 'glow_berries', ['gtceu:methane 6', 'gtceu:methane 24']],
        ['bamboo', 'bamboo', ['gtceu:methane 6', 'gtceu:methane 24']],
        ['torchflower', 'torchflower_seeds', ['minecraft:lava 6', 'minecraft:lava 4']],
        ['red_mushroom', 'red_mushroom', ['gtceu:methane 6', 'gtceu:methane 4']],
        ['brown_mushroom', 'brown_mushroom', ['gtceu:methane 6', 'gtceu:methane 4']],
        ['cocoa_beans', 'cocoa_beans', ['gtceu:methane 2', 'gtceu:methane 18']],
        ['sweet_berries', 'sweet_berries', ['gtceu:methane 6', 'gtceu:methane 24']]
    ].forEach(crop)

    const bigCrops = [
        ['pumpkin', 'pumpkin_seeds', ['gtceu:methane 8', 'gtceu:methane 20']],
        ['melon', 'melon_seeds', ['gtceu:methane 8', 'gtceu:methane 20']],
        ['kelp', 'kelp', ['gtceu:methane 2', 'gtceu:methane 3']],
        ['cactus', 'cactus', ['gtceu:methane 12', 'gtceu:methane 32']],
        ['chorus_fruit', 'chorus_flower', ['gtceu:ender_air 120', 'gtceu:ender_air 400']],
    ].forEach(bigCrop)

    const flower = [
        'dandelion',
        'poppy',
        'allium',
        'blue_orchid',
        'azure_bluet',
        'red_tulip',
        'orange_tulip',
        'white_tulip',
        'pink_tulip',
        'oxeye_daisy',
        'cornflower',
        'lily_of_the_valley',
        'pink_petals',
        'spore_blossom',
        'lilac',
        'rose_bush',
        'sunflower'
    ].forEach(flowers)

    const grassTypes = [
        'grass',
        'fern',
        'dead_bush',
        'crimson_roots',
        'warped_roots',
        'nether_sprouts',
        'weeping_vines',
        'twisting_vines',
        'vine',
        'tall_grass',
        'large_fern',
        'azalea',
        'flowering_azalea',
        'glow_lichen',
        'hanging_roots',
        'frogspawn',
        'seagrass',
        'lily_pad'
    ].forEach(flowers)
})