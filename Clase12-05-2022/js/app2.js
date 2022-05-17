const btnAbrirJson = document.querySelector("#abrirJSON")
btnAbrirJson.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'data/nombre.json'

    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}


function mostrarHTML({ name, username, phone, address: { city } }) {
    /* const { name, username, phone, address: { city } } = nombre */
    /* console.log(nombre); */
    const body = document.querySelector("body")
    const div = document.createElement('div')

    div.innerHTML = `
    <div class='nombre'>Nombre: ${name} </div>
    <div class='nombre'>Usuario: ${username} </div>
    <div class='nombre'>Dirección: ${city} </div>
    <div class='nombre'>Telefono: ${phone} </div>
    `

    body.appendChild(div)
}