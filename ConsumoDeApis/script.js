const boton1 = document.getElementById("consulta1");
const boton2 = document.getElementById("consulta2");

const respuesta1 = document.getElementById("respuesta1");
var respuesta2 = document.getElementById("respuesta2");

boton1.addEventListener('click', entre_res);

function entre_res(){

    // respuesta1.textContent = "Estoy dentro";
    // respuesta1.innerHTML = "<h2>Esto es inserción de <code>html</code></h2>";

    fetch("https://fakerapi.it/api/v2/users?_quantity=1&_gender=female")
    .then((res)=> res.json())
    .then((response)=>{
        // console.log(response)
        respuesta1.textContent  = response.data.map((user)=> `Nombre:${user.firstname}      Email:${user.email}`);
        // console.log(tpl)
    })

}

boton2.addEventListener('click', entre_res2);

function entre_res2(){

    // fetch("https://fakerapi.it/api/v2/users?_quantity=10&_gender=female")
    // .then(res=> res.json())
    // .then(response=>{
    //     console.log(response)
    // })

}