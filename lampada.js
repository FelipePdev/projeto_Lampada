const turnOn = document.getElementById( 'turnOn');
const turnOf = document.getElementById( 'turnOf');
const lamp = document.getElementById('lamp');


function isbroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if (!isbroken()){
        lamp.src = './image/lampacesa.jpg'
    }
}


function lampOf(){
    if (!isbroken()){
    lamp.src = './image/lampada.jpg'
    }
}
function lampquebrada(){
    lamp.src = './image/quebrada.jpg'
}



turnOn.addEventListener('click' , lampOn)
turnOf.addEventListener('click' , lampOf)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOf)
lamp.addEventListener('dblclick', lampquebrada)
