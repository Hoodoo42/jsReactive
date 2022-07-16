

function nowOrange(details){
    details[`target`][`style`][`backgroundColor`] =`orange`;
}

let greeting = document.getElementById(`sayHi`);
sayHi.addEventListener(`click`, nowOrange);


function changeTag(details){
    details[`target`][`outerHTML`] = `<h1>SURPRISE!!</H1>`

}

let clickHere = document.getElementById(`clickHere`)
clickHere.addEventListener(`dblclick`, changeTag)



function hoverElements(details){
    let hoverElementsP=[`<p>top</p>` + `<p>middle</p>` + `<p>bottom</p>`]
    for(i=0; i<hoverElementsP.length; i++){
        details[`target`][`outerHTML`] = hoverElementsP + finalTag[`outerHTML`];
    }
}

let hoverEvent = document.getElementById(`finalTag`);
hoverEvent.addEventListener(`mouseover`, hoverElements)