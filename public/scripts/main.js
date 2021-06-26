import Modal from './modal.js'

const modal = Modal()

//capturando os titulos e botão da modal
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

//passo 0 - Capturar todos os botões com a classe check que existem
const checkButtons = document.querySelectorAll(".actions a.check")
// Passo 1 - Capturar o evento de quando o marcar como lido for clicado
checkButtons.forEach(button => {
    // Adiciona a escuta em cada botão com check
    button.addEventListener("click", handleClick)
})

/* Quando o botão delete for clicado ele abre a modal*/
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    // Evita que os botões com tag a se comportem como link
    event.preventDefault()
    //Faz o teste e atribui a uma variável o texto
    const text = check ? "marcar como lida esta pergunta?" : "excluir esta pergunta?"

    const roomId = document.querySelector("#room-id").dataset.id

    const questionId = event.target.dataset.id


    const form = document.querySelector(".modal form")

    const slug = check ? "check" : "delete"

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    // Muda o conteúdo do título da modal
    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir "
    // Muda a descrição da modal
    modalDescription.innerHTML = `Tem certeza que deseja ${text}`
    //Muda o texto do botão da modal
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir pergunta"
    // Muda a cor do botão da modal
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    // Abrir modal
    modal.open()


}


