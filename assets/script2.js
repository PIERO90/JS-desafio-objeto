const propiedades = [
  {
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    nombre: "Casa montaña",
    descripcion: "Desde las alturas todo se ve mejor",
    cuartos: 3,
    metros: 200,
  },
  {
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    nombre: "Casa del lago",
    descripcion: "Vistas y experiencia refrescante",
    cuartos: 3,
    metros: 160,
  },
  {
    nombre: "Departamento 3",
    descripcion: "Vida urbana garantizada",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 2,
    metros: 100,
  },
  {
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    nombre: "Casa Rodante",
    descripcion: "Vistas panorámicas",
    cuartos: 1,
    metros: 60,
  },
  {
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    nombre: "Estudio",
    descripcion: "Departamente studio",
    cuartos: 1,
    metros: 70,
  },
  {
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    nombre: "Mansion",
    descripcion: "Espectacular experiencia habitacional",
    cuartos: 6,
    metros: 500,
  },
];

function buscarPropiedades() {
  const nombreBusqueda = document.getElementById("nombre").value;
  const cuartosBusqueda = parseInt(document.getElementById("cuartos").value);
  const metrosBusqueda = parseInt(document.getElementById("metros").value);

  document.getElementById("resultados").innerHTML = "";

  // Filtra propiedades que coinciden con la búsqueda
  const resultados = propiedades.filter((propiedad) => {
    if (nombreBusqueda && propiedad.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase())) {
      return true;
    }
    if (!isNaN(cuartosBusqueda) && propiedad.cuartos === cuartosBusqueda) {
      return true;
    }
    if (!isNaN(metrosBusqueda) && propiedad.metros >= metrosBusqueda) {
      return true;
    }
    return false;
  });

  // Actualizar el total de resultados
  document.getElementById("resultados").innerHTML = `<p> Total de resultados encontrados: ${resultados.length}</p>`;

  // tarjetas de propiedades
  resultados.forEach((propiedad) => {
    const propiedadHTML = `
            <div>
                <h2>${propiedad.nombre}</h2>
                <p>${propiedad.descripcion}</p>
                <p>Cuartos: ${propiedad.cuartos}</p>
                <p>Metros Cuadrados: ${propiedad.metros}</p>
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
            </div>
        `;
    document.getElementById("resultados").innerHTML += propiedadHTML;
  });
}

document.getElementById("buscar").addEventListener("click", buscarPropiedades);

buscarPropiedades();
