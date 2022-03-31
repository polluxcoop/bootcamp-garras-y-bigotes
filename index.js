const evento = document.getElementById('button1');
const enviarFormulario =() => {
    
 
    let nombreyapellido = document.getElementById('nombreyapellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let Mensaje = document.getElementById('Mensaje').value;
    let numero= 595971488547;
    var win= window.open(`http://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20,${nombreyapellido}
    ,%20${email},%20${telefono},asunto:%20${Mensaje}`, '_blank');
}       
evento.addEventListener('click',enviarFormulario);