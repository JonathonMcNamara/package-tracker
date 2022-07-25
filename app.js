// Now lets setup the DOM, try drawing all your packages to the page using a draw function. We can now also setup a button for each of the properties we want to filter by.

// Lets simulate a missing package, utilize math.random and math.floor to grab a random package from your packages array.

// to find your package add buttons that you can click and filter the packages by the property listed on that button.








const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    name: 'Harrington ',
    trackingNumber: '1324kjs'
},
{
    heavy: false,
    priority: true,
    fragile: true,
    name: 'Mark ',
    trackingNumber: '1325sdk'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    name: 'Mick ',
    trackingNumber: 'jffd147'
},
{
    heavy: false,
    priority: false,
    fragile: false,
    name: 'Jake ',
    trackingNumber: 'acdc145'
},
{
    heavy: true,
    priority: true,
    fragile: true,
    name: 'Brittany '
},
{
    heavy: false,
    priority: true,
    fragile: false,
    name: 'Zach ',
    trackingNumber: '8081baz'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    name: 'Jeremy ',
    trackingNumber: 'suz2367'
}
]


// CREATE A BUTTON FIRST FOR INVENTORY THAT WILL THEN DISPLAY 
let sPackages = packages

let hPackages = sPackages.filter(s => s.heavy)
console.log("heavy", hPackages);

let pPackages = sPackages.filter(s => s.priority)
console.log("priority",pPackages);

let fPackages = sPackages.filter(s => s.fragile)
console.log("fragile", fPackages);


function heavy (){
    let template = ''
    sPackages = sPackages.filter(s => s.heavy == true)
    sPackages.forEach(s => template += `<div class="col-6 btn bg-dark text-light" on-click="heavy${s.name + s.trackingNumber}">${s.name + s.trackingNumber}</div>`)
    let packageElm = document.getElementById('packages')
    packageElm.innerHTML = template
}
function notheavy(){
    let template = ''
    sPackages = sPackages.filter(s => s.heavy != true)
    sPackages.forEach(s => template += `<div class="col-6 btn bg-dark text-light" on-click="notheavy${s.name + s.trackingNumber}">${s.name +s.trackingNumber}</div>`)
    let packageElm = document.getElementById('packages2')
    packageElm.innerHTML = template

}
function priorityHeavy(){
    sPackages = sPackages.priority(s => s.priority == true)
    heavy()
}
function priorityNotHeavy(){
    sPackges = sPackages.priority(s => s.priority == true)
    notheavy()
}



// function drawPackages(){
//     let template = ''
//     sPackages.forEach(s => template += `<div class="col-4 btn bg-dark text-light"('${s.name + s.trackingNumber}')">${s.name + s.trackingNumber}</div>`)
//     let packageElm = document.getElementById('packages')
//         console.log(packageElm, template);
//     packageElm.innerHTML = template    
// }
// drawPackages()

// function sort(){
//     sPackages = sPackages.filter(s => s.heavy == true)
//     drawPackages()
// }









