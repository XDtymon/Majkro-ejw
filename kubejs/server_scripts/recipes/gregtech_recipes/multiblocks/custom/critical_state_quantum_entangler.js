ServerEvents.recipes(event => {
    const cells = ['fluid', 'item']
    const cellTypes = ['1k', '4k', '16k', '64k', '256k']
    const gtPower = [GTValues.VA[GTValues.IV], GTValues.VA[GTValues.LuV], GTValues.VA[GTValues.ZPM], GTValues.VA[GTValues.UV], GTValues.VA[GTValues.UHV]]

    for (let c = 0; c < cells.length; c++) {
        for (let t = 0; t < cellTypes.length; t++) {
            event.recipes.gtceu.critical_state_quantum_entangler()
                .itemInputs('ae2:'+cells[c]+"_cell_housing", "ae2:cell_component_"+cellTypes[t])
                .itemOutputs('ae2:'+cells[c]+"_storage_cell_"+cellTypes[t])
                .totalCWU(gtPower[t] / 512)
                .duration(1200)
                .EUt(gtPower[t])
                .CWUt(cwut)
        }
    }

})