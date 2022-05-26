document.addEventListener('DOMContentLoaded', () => {
    const arregloCartas = [
      {
        nombre: 'burger',
        img: 'imagenes/burger.gif'
      },
      {
        nombre: 'burger',
        img: 'imagenes/burger.gif'
      },
      {
        nombre: 'castor',
        img: 'imagenes/castor.gif'
      },
      {
        nombre: 'castor',
        img: 'imagenes/castor.gif'
      },
      {
        nombre: 'desayuno',
        img: 'imagenes/desayuno.gif'
      },
      {
        nombre: 'desayuno',
        img: 'imagenes/desayuno.gif'
      },
      {
        nombre: 'dona',
        img: 'imagenes/dona.gif'
      },
      {
        nombre: 'dona',
        img: 'imagenes/dona.gif'
      },
      {
        nombre: 'heffer',
        img: 'imagenes/heffer.gif'
      },
      {
        nombre: 'heffer',
        img: 'imagenes/heffer.gif'
      },
      {
        nombre: 'hell',
        img: 'imagenes/hell.gif'
      },
      {
        nombre: 'hell',
        img: 'imagenes/hell.gif'
      },
      {
        nombre: 'minion',
        img: 'imagenes/minion.gif'
      },
      {
        nombre: 'minion',
        img: 'imagenes/minion.gif'
      },
      {
        nombre: 'pan',
        img: 'imagenes/pan.gif'
      },
      {
        nombre: 'pan',
        img: 'imagenes/pan.gif'
      },
      {
        nombre: 'pancake',
        img: 'imagenes/pancake.gif'
      },
      {
        nombre: 'pancake',
        img: 'imagenes/pancake.gif'
      },
      {
        nombre: 'pepe',
        img: 'imagenes/pepe.gif'
      },
      {
        nombre: 'pepe',
        img: 'imagenes/pepe.gif'
      },
      {
        nombre: 'soya',
        img: 'imagenes/soya.gif'
      },
      {
        nombre: 'soya',
        img: 'imagenes/soya.gif'
      },
      {
        nombre: 'sushiroll',
        img: 'imagenes/sushiroll.gif'
      },
      {
        nombre: 'sushiroll',
        img: 'imagenes/sushiroll.gif'
      },
      {
        nombre: 'sushiroll2',
        img: 'imagenes/sushiroll2.gif'
      },
      {
        nombre: 'sushiroll2',
        img: 'imagenes/sushiroll2.gif'
      },
      {
        nombre: 'sushiroll3',
        img: 'imagenes/sushiroll3.gif'
      },
      {
        nombre: 'sushiroll3',
        img: 'imagenes/sushiroll3.gif'
      },
      {
        nombre: 'sushiroll4',
        img: 'imagenes/sushiroll4.gif'
      },
      {
        nombre: 'sushiroll4',
        img: 'imagenes/sushiroll4.gif'
      },
     ]
  // .sort para ordenarlos de una para que aparezcan de forma aleatoria anadiendole el math.random
  //
    arregloCartas.sort(() => 0.5 - Math.random())
  
    const resultadoPantalla = document.querySelector('#result')
    const columnas = document.querySelector('.grid')
    const lastResult = localStorage.getItem("result")
    if(lastResult){
      resultadoPantalla.textContent = lastResult
    }
    let cartaEscogida = []
    let cartaGanadoras = []
    let cartaPorId = [] 
    
    function cartaVolteada() {
      let idCarta = this.getAttribute('data-id')
      cartaEscogida.push(arregloCartas[idCarta].nombre)
      cartaPorId.push(idCarta)
      this.setAttribute('src', arregloCartas[idCarta].img)
      if (cartaEscogida.length ===2) {
        setTimeout(parejas, 500)
      }       
    }



    function tabla() {
      for (let i = 0; i < arregloCartas.length; i++) {
        const carta = document.createElement('img')
        carta.setAttribute('src', 'imagenes/dorso.png')
        carta.addEventListener('click', cartaVolteada)
        carta.setAttribute('data-id', i)
        columnas.appendChild(carta)       
      }
    }
 
    

    function parejas() {
      const cartas = document.querySelectorAll('img')
      const primeraOpcionId = cartaPorId[0]
      const segundaOpcionId = cartaPorId[1]
      
      
      if(primeraOpcionId == segundaOpcionId) {
        cartas[primeraOpcionId].setAttribute('src', 'imagenes/dorso.png')
        cartas[segundaOpcionId].setAttribute('src', 'imagenes/dorso.png')
        //alert('Dale click a otra imagen, no a la misma... boludo')
        let timerInterval
Swal.fire({
  title: 'Dale click a otra imagen, no a la misma... boludo!',
  html: 'se cerrara en <b></b> millisegundos.',
  timer: 2000,
  timerProgressBar: true,
  
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
      }
      else if (cartaEscogida[0] === cartaEscogida[1]) {
        //alert('Encontraste la pareja')
        let timerInterval
Swal.fire({
  title: 'Encontraste una pareja!',
  html: 'se cerrara en <b></b> millisegundos.',
  timer: 1200,
  timerProgressBar: true,
  
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
        cartas[primeraOpcionId].setAttribute('src', 'imagenes/blanco.png')
        cartas[segundaOpcionId].setAttribute('src', 'imagenes/blanco.png')
       cartaGanadoras.push(cartaEscogida)
      } else {
        cartas[primeraOpcionId].setAttribute('src', 'imagenes/dorso.png')
        cartas[segundaOpcionId].setAttribute('src', 'imagenes/dorso.png')
        let timerInterval
Swal.fire({
  title: 'Intenta de nuevo!',
  html: 'se cerrara en <b></b> millisegundos.',
  timer: 700,
  timerProgressBar: true,
  

  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}


  
      cartaPorId = []
      cartaEscogida = []
      resultadoPantalla.textContent = cartaGanadoras.length
      localStorage.setItem("result", cartaGanadoras.length)
      if  (cartaGanadoras.length === arregloCartas.length/2) {
        resultadoPantalla.textContent = 'Ganaste!!!... pero no hay premio, bye bye.'
      }
     
    }
   /*  function guardarLocalStorage(){
    guardarLocalStorage();

  } */

    tabla()
 
  })


let boton = document.getElementById("principal");

boton.addEventListener("click", () => {
  console.log("funciona")
  localStorage.clear()
  location.reload()
})
