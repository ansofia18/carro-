var carro= document.querySelector('.carro')
var fondo = document.querySelector('.fondo')
var llanta1 = document.querySelector('.llanta1')
var llanta2= document.querySelector('.llanta2') 
var sprite = document.querySelector('.sprite')

carro.addEventListener('click',InicioMovimiento)

function InicioMovimiento(){

    
fondo.classList.add('fondo_oculto')
llanta1.classList.add('llanta1_oculto')
llanta2.classList.add('llanta2_oculto')
sprite.classList.remove('oculto')
sprite.classList.add('sprite_oculto')

}

