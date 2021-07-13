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