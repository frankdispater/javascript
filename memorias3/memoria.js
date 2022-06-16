document.addEventListener('DOMContentLoaded', () => {
    
    let arregloCartas = []

  const traerCartas = async () => {
    let response = await fetch("memoriacartas.json")
    let data = await response.json();
    arregloCartas = data;
  }
   console.log(traerCartas);
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
