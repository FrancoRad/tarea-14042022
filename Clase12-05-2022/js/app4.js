/*const btnCargarApi = document.querySelector("#cargarApi")
btnCargarApi.addEventListener('click', mostrarDatos)*/
const getValueInput = () =>{
    const inputValue = document.getElementById("domTextElement").value; 
    const url = "https://jsonplaceholder.typicode.com/photos" 
    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos)) 
    function mostrarHTML(nombres) {
        nombres.forEach(nombre => {
            const { albumId, id, title, url, thumbnailUrl } = nombre
            const body = document.querySelector('body')
            const div = document.createElement('div')

            if(id == inputValue){
                publicarHTML(nombre)
            }else{
                if(inputValue == 'all'){
                    publicarHTML(nombre)
                }else{
                    if(inputValue == 'albumid '+albumId){
                        var valorAlbumId = inputValue.toString().slice(8,11)
                        if(albumId == valorAlbumId){
                            publicarHTML(nombre)
                        }
                    }
                }
            }
        })
    }
    function publicarHTML(nombre){
        const { albumId, id, title, url, thumbnailUrl } = nombre
        const body = document.querySelector('body')
        const div = document.createElement('div')
        div.innerHTML = `
            <hr>
            <div class='id'>ALBUMID: ${albumId} </div>
            <div class='id'>ID: ${id} </div>
            <div class='title'>TITULO: ${title} </div>
            <div class='url'>URL: <a href="${url}">${url}</a></div>
            <div class='thumbnailUrl'>thumbnailUrl: <a href="${thumbnailUrl}">${thumbnailUrl}</a></div>
        `
        return body.appendChild(div)
    }
}
