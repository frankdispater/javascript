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
  // El . sort es para ordenarlos de una para que aparezcan de forma aleatoria anadiendole el math.random
    arregloCartas.sort(() => 0.5 - Math.random())
  
    const columnas = document.querySelector('.grid')
    const resultadoPantalla = document.querySelector('#result')
    let cartaEscogida = []
    let cartaPorId = []
    let cartaGanadoras = []
 
  
    function tabla() {
      for (let i = 0; i < arregloCartas.length; i++) {
        const carta = document.createElement('img')
        carta.setAttribute('src', 'imagenes/dorso.png')
        carta.setAttribute('data-id', i)
        carta.addEventListener('click', cartaVolteada)
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
        alert('Dale click a otra imagen, no a la misma... boludo')
      }
      else if (cartaEscogida[0] === cartaEscogida[1]) {
        alert('Encontraste la pareja')
        cartas[primeraOpcionId].setAttribute('src', 'imagenes/blanco.png')
        cartas[segundaOpcionId].setAttribute('src', 'imagenes/blanco.png')
       
        cartaGanadoras.push(cartaEscogida)
      } else {
        cartas[primeraOpcionId].setAttribute('src', 'imagenes/dorso.png')
        cartas[segundaOpcionId].setAttribute('src', 'imagenes/dorso.png')
        alert('Intentalo de nuevo, bobo.')
      }


      cartaEscogida = []
      cartaPorId = []
      numeroIntentos = []
      resultadoPantalla.textContent = cartaGanadoras.length
      if  (cartaGanadoras.length === arregloCartas.length/2) {
        resultadoPantalla.textContent = 'Ganaste!!!... pero no hay premio, bye bye.'
      }
    }
    
  
    function cartaVolteada() {
      let idCarta = this.getAttribute('data-id')
      cartaEscogida.push(arregloCartas[idCarta].nombre)
      cartaPorId.push(idCarta)
      this.setAttribute('src', arregloCartas[idCarta].img)
      if (cartaEscogida.length ===2) {
        setTimeout(parejas, 500)
      }
    }
  
    tabla()
  })



 
