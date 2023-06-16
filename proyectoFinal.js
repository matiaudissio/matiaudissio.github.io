var btn = document.getElementById('ingresar');
var clave = document.getElementById('clave');
var usuario = document.getElementById('usuario');



btn.addEventListener('click', function(evt){

      if(clave.value === ''){

          console.log('el campo contraseña es obligatorio')
          evt.preventDefault();
          return false;

      }else if(usuario.value === ''){

      console.log('el campo de usuario es obligatorio')
          evt.preventDefault();
          return false;

      }else if(usuario.value.length > 30){

        console.log('El nombre del usuario es demasiado largo')
          evt.preventDefault();
          return false;

      }




});

function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

var resultado = window.confirm('Estas seguro?');
if (resultado === true) {
    window.alert('Okay, si estas seguro.');
} else { 
    window.alert('Pareces indeciso');
}