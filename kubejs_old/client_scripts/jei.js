//Item hidding method:

JEIEvents.hideItems(event => {
    event.hide('create:transmitter')
    event.hide('gtceu:basic_electronic_circuit')
    event.hide('gtceu:good_electronic_circuit')
    event.hide('ae2:nether_quartz_hoe')
    event.hide('ae2:nether_quartz_sword')
    event.hide('ae2:nether_quartz_shovel')
    event.hide('ae2:nether_quartz_axe')
    event.hide('ae2:nether_quartz_pickaxe')
    event.hide('ae2:certus_quartz_hoe')
    event.hide('ae2:certus_quartz_sword')
    event.hide('ae2:certus_quartz_shovel')
    event.hide('ae2:certus_quartz_axe')
    event.hide('ae2:certus_quartz_pickaxe')
    event.hide('ae2:fluix_quartz_hoe')
    event.hide('ae2:fluix_quartz_sword')
    event.hide('ae2:fluix_quartz_shovel')
    event.hide('ae2:fluix_quartz_axe')
    event.hide('ae2:fluix_quartz_pickaxe')
    event.hide('ae2:silicon')




})
JEIEvents.addItems(event => {
    event.remove('create:shadow_steel')
})