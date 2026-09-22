let totalFinal=0;
let entrega="";

function total(){
    const precio = document.getElementById("precio").value
    const cantidad = document.getElementById("cantidad").value

    let subtotal = parseInt(precio) * parseInt(cantidad)
    document.getElementById("subtotal").innerHTML = "Subtotal: S/" + subtotal


    entrega = document.getElementById("envio").value

    switch(entrega){
        case "0":
            document.getElementById("costo_envio").innerHTML = "Costo de envio: S/0"
            break
        case "10":
            document.getElementById("costo_envio").innerHTML = "Costo de envio: S/10.00"
            break
        case "18":
            document.getElementById("costo_envio").innerHTML = "Costo de envio: S/18.00"
            break
    }

    

    totalFinal= subtotal + parseInt(entrega)

    document.getElementById("total_pagar").innerHTML = "Total a pagar: S/" + totalFinal
}   
