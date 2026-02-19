ServerEvents.recipes(event => {

    //Fusion Core Function

    
    function Fusion(
        fluidInput_list, 
        fluidOutput_list,
        recipeTime,  // ticks
        temperatureRate, // MK
        generationRate,
        radiationRate //Normal 1.0
    ) {
        event.custom({
        type: 'nuclearcraft:fusion_core',

        powerModifier: generationRate,
        radiation: radiationRate,
        temperature: temperatureRate,
        timeModifier: recipeTime,

        inputFluids: [
            { 
                tag: fluidInput_list[0][0],
                amount: fluidInput_list[0][1]
            },
            { 
                tag: fluidInput_list[1][0],
                amount: fluidInput_list[1][1]
            }
        ],
        outputFluids: [
            { 
                tag: fluidOutput_list[0][0],
                amount: fluidOutput_list[0][1]
            },
            { 
                tag: fluidOutput_list[1][0],
                amount: fluidOutput_list[1][1]
            },
            { 
                tag: fluidOutput_list[2][0],
                amount: fluidOutput_list[2][1]
            },
            { 
                tag: fluidOutput_list[3][0],
                amount: fluidOutput_list[3][1]
            }
        ]
        })
    }



    //Usage

    Fusion(
        [
            ["forge:gold", 16],
            ["forge:aluminium", 16]
        ],
        [
            ["gtceu:uranium", 4],
            ["gtceu:uranium", 4],
            ["gtceu:uranium", 4],
            ["gtceu:uranium", 4]
        ],
        4, //480
        97500,
        5400,
        2 //2.3
    )   
    Fusion(
        [
            ["forge:silicon", 16],
            ["forge:magnesium", 16]
        ],
        [
            ["gtceu:iron_plasma", 4],
            ["gtceu:iron_plasma", 4],
            ["gtceu:iron_plasma", 4],
            ["gtceu:iron_plasma", 4]
        ],
        5,
        208000,
        7800,
        1
    )  
    Fusion(
        [
            ["forge:arsenic", 16],
            ["forge:ruthenium", 8]
        ],
        [
            ["gtceu:darmstadtium", 4],
            ["gtceu:darmstadtium", 4],
            ["gtceu:darmstadtium", 4],
            ["gtceu:darmstadtium", 4]
        ],
        40,
        126700,
        68000,
        1
    )  
    Fusion(
        [
            ["forge:xenon", 64],
            ["forge:zinc", 4]
        ],
        [
            ["gtceu:plutonium", 4],
            ["gtceu:plutonium", 4],
            ["gtceu:plutonium", 4],
            ["gtceu:plutonium", 4]
        ],
        80,
        348000,
        24000,
        3
    ) 
    Fusion(
        [
            ["forge:hydrogen", 64],
            ["forge:vanadium", 4]
        ],
        [
            ["gtceu:chromium", 4],
            ["gtceu:chromium", 4],
            ["gtceu:chromium", 4],
            ["gtceu:chromium", 4]
        ],
        25,
        280,
        8640,
        1
    ) 
    Fusion(
        [
            ['forge:radon', 32],
            ['forge:gallium', 4]
        ],
        [
            ["gtceu:duranium", 2],
            ["gtceu:duranium", 2],
            ["gtceu:duranium", 2],
            ["gtceu:duranium", 2]
        ],
        16,
        495700,
        230710,
        3
    ) 
    Fusion(
        [
            ["forge:hydrogen", 32],
            ["forge:neodymium", 4]
        ],
        [
            ["gtceu:europium", 1],
            ["gtceu:europium", 1],
            ["gtceu:europium", 1],
            ["gtceu:europium", 1]
        ],
        14,
        35700,
        145690,
        1
    ) 
})


