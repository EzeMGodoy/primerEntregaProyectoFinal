//* ---------> DEFINCION DE CLASES <--------

class Capacitacion {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor(usuario, capacitaciones) {
    this.fecha = new Date(); // agrego la fecha del momento en que se crea
    this.usuario = usuario;
    this.capacitaciones = capacitaciones;
  }

  agregarCapacitacion(capa) {
    this.capacitaciones.push(capa);
  }

  totalCarrito() {
    let total = 0.0;

    for (let i = 0; i < this.capacitaciones.length; i++) {
      total = total + this.capacitaciones[i].precio;
    }
    return total;
  }

  descuento(metodoPago){
    let precioDescuento = 0.0;
    switch(metodoPago) {
      case "tarjeta":
        precioDescuento = this.totalCarrito() + (this.totalCarrito() * (10/100));
        break;
      case "efectivo":
        precioDescuento = this.totalCarrito() - (this.totalCarrito() * (10/100));
        break;
      default:
        precioDescuento = this.totalCarrito();
        break;
    }
    return precioDescuento;
  }

  resumenCompra() {
    if (this.capacitaciones.length == 0) {
      return "El carrito se encuentra vacío";
    }

    let msj = `El carrito contiene ${this.capacitaciones.length} cursos:\n`;

    this.capacitaciones.forEach((curso) => {
      msj += ` - ${curso.nombre}: $ ${curso.precio}\n`;
    });

    msj += `\nMonto Total: $${this.totalCarrito()}`;

    return msj;
  }
}

//* ------------> DEFINICION DE FUNCIONES <---------------------

function pedirDato() {
  let nombre = "";

  while (nombre != "0") {
    nombre = prompt(
      "Ingrese nombre del curso que desea agregar:\n 1 - eft\n 2 - biodescodificacion\n 3 - pendulo\n 4 - biotrading\n (0 para finalizar)"
    );

    if (nombre == "0") {
      break;
    }

    let precio = parseFloat(prompt("Ingrese precio del curso:"));
    

    let curso = new Capacitacion(nombre, precio);
    carro.agregarCapacitacion(curso);
  }

  let metodoPago = prompt("Qué metodo de pago utilizaras?\ntarjeta (+10%)\nefectivo(-10%)");
  precioFinal = carro.descuento(metodoPago);

}

// * -----------> COMIENZO DEL PROGRAMA <---------



let inicio = confirm(
  "Bienvenido a nuestra tienda, deseas realizar alguna compra?"
);

let precioFinal = 0.0;

let carro = new Carrito("pepito", []);


if(inicio == true) {
  pedirDato();
  alert(carro.resumenCompra());
  alert(`El precio a pagar es $${precioFinal}`)

}else{
  alert("Gracias, vuelva pronto")
}

