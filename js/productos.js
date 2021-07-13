if (document.getElementById("idprod"))
{
var cad=  
for (var i=0 ; i<data.Length ; i++) 
      {var cad=`
        
        <div id="demo" class="carousel slide" data-ride="carousel" id="carousel">
        
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="`${data[i].imagen1}`" alt="arteon" width="250px" height="225px">
          </div>
           <div class="carousel-item">
              <img src="`${data[i].imagen2}`" alt="golf" width="250px" height="225px">
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
          <h4 class="card-title">` ${data[i].nombre}`</h4>
          <p class="card-text"> ` ${data[i].descripcion}`</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>
        `
}
}

console.log(cad)
document.getElementById("idprod").innerHTML=cad;