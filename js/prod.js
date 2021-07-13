if (document.getElementById("idprod"))
{
for (var i =0; i<=data.length; i++) 
  cad+=
        `
        <div id="demo" class="carousel slide" data-ride="carousel" id="carousel">
        
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${data[i].imagen1}" alt="arteon" width="250px" height="225px">
          </div>
           <div class="carousel-item">
              <img src="${data[i].imagen2}" alt="golf" width="250px" height="225px">
           </div>
         </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
           <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          </a>

      </div>  

          <div class="card-body">
          <h4 class="card-title"> ${data[i].nombre}</h4>
          <p class="card-text">  ${data[i].descripcion}</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>
        
        `
       }

console.log(cad)
document.getElementById("idprod").innerHTML=cad;

var cad= `

<nav class="navbar navbar-dark bg-info container-fluid navbar-expand-md fixed-top justify-content-center" id="navbar"> 
    <a class="navbar-brand" href="">
    <img src="imagenes/vwlogo.svg" alt="Logo" style="width:50px;">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
  <UL class="navbar-nav">
      <li class="nav-item nav-link"><a href="index.html">Inicio</a></li>
      <li class="nav-item nav-link"><a href="ClubMunich.html">Club Munich</a></li>
      <li class="nav-item nav-link"><a href="Sucursales.html">Sucursales</a></li>
      <li class="nav-item nav-link"><a href="Nosotros.html">Nosotros</a></li>
      <li class="nav-item nav-link"><a href="Contacto.html">Contacto</a></li>
      <li class="nav-item nav-link"><a href="nuestrosclientes.html">Clientes</a></li>
    </UL> 
    </div>      
  </nav>
`
document.getElementById("idheader").innerHTML=cad;

var cad2 = `
  <p>Pagina web creada por Juan Fernandez</p>     
      <a href="http://www.twitter.com" id="tlogo">
        <i class="fab fa-twitter"></i>
      </a> 

      <a href="http://www.Facebook.com" id="flogo">
        <i class="fab fa-facebook"></i>
      </a> 

      <a href="http://www.instagram.com" id="ilogo">
        <i class="fab fa-instagram" ></i>
      </a>  
 `

 document.getElementById("idfooter").innerHTML=cad2;