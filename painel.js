const app = document.getElementById('app')
const ancora = document.querySelectorAll('a')
const relogio = document.getElementsByClassName('relogio-rodape')[0]
const faixa = document.getElementById('faixa-deslizante')
let divMsg = document.getElementById("msg")

//Referência para os botões de ação


let contador = 0

ancora.forEach(a => {
    a.addEventListener('click', (evt) => {
        evt.preventDefault()

        carregarPagina(`${evt.target.getAttribute('data-target')}.html`)       
  
        scrollTo(0, 0)
    })
})


//chamada de página com callback opcional...
const carregarPagina = ( (pagina) => {
    fetch(pagina)
        .then(resp => resp.text())
        .then(resp => {
            app.innerHTML = resp
        })

    scrollTo(0, 0)
})
