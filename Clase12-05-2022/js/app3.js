const jsonArray = document.querySelector("#abrirJSONArray")
jsonArray.addEventListener('click', mostrarDatos)

function mostrarDatos(){
    
    const url = 'data/nombres.json'
    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}
function mostrarHTML(nombres) {
    nombres.forEach(nombre=>{
        const { name, username, address: { city } } = nombre
        const body = document.querySelector('body')
        const div = document.createElement('div')
    
        div.innerHTML=`
            <br>
            <div class= 'nombre'> Nombre: ${name}</div>
            <div class= 'nombre'> Usuario: ${username}</div>
            <div class= 'nombre'> Ciudad: ${city}</div>
            <br>
            <hr>  
        `
        body.appendChild(div)
    })
    
}