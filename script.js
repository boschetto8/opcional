

arrayNoticias.forEach (element => {
let tarjetas = document.createElement('div');
tarjetas.innerHTML= `<div class="card" style="width: 18rem;">
                        <img src="${element.imagen}" class="card-img-top" alt="${element.titulo}">
                            <div class="card-body">
                                 <h5 class="card-title">${element.titulo}</h5>
                                 <p class="card-text">Esta es una noticia de la sección ${element.seccion} por el diario ${element.diario}.</p>
                                 <p class="card-text">Suscribe ${element.periodista}.</p>
                             <div class="mbr-section-btn">
                             <a class="btn btn-primary display-4" id="id-${element.id}">Borrar</a></div>
                    </div>`;
document.getElementById('tarjetas').appendChild(tarjetas);


//con el boton Borrar va borrando las tarjetas a traves del parent Node
let botonBorrar = document.getElementById ("id-"+element.id);
botonBorrar.addEventListener('click', () => {
        tarjetas.parentNode.removeChild(tarjetas);
        console.log(element.titulo + ' con el id '+element.id + ' ha sido borrado');
    });

})
  
