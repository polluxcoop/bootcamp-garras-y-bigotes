<template>
<body>
    <section class="">
        <div class="img-fondo">
            <div class="container">
                <img src="/assets/LogoGarrasyBigotes.png" alt="logo"/>
                <p>Alimentamos a más de 100 gatitos sin hogar todos los días. Buscamos familias responsables para ellos.</p>
                <a href="https://www.facebook.com/messages/t/100750711533367">
                 <button type="button">¡Quiero adoptar!</button>
                </a>
           </div>
        </div>   
    </section>
    <section class="">
        <div class="adopta">
             <div class="img-corazon">
                <h1>#Adoptá</h1>
                 <img  src="/assets/Emoji.png" alt="corazon">
            </div>
            <div class="gatitos">
                <img 
                src="/assets/gato2.jpeg" alt="gatito2"
                 />
                 <img 
                src="/assets/gato3.jpeg" alt="gatito3"
                 />
                 <img 
                src="/assets/gato4.jpeg" alt="gatito4"
                />
                <img 
                src="/assets/gato5.jpeg" alt="gatito5"
                />
                <img
                src="/assets/gato6.jpeg" alt="gatito6"
                />
            </div>
        </div>
    </section>

    <section class="">
        <div  class="formulario" style="overflow: hidden">
            <div class="container-formulario">
                        <form >
                            <label class="label">Nombre y Apellido</label>
                            <input class="input" type="text"  name="" id="nombreyapellido"  placeholder="Nombre y Apellido "
                            required autocomplete="off"
                            v-model="form.nombreyapellido"/>
                            <label class="label">E-mail</label>
                            <input class="input" type="text" name="" id="email"  placeholder="E-mail"
                            required autocomplete="off"
                            v-model="form.email"/>
                            <label class="label">Teléfono</label>
                            <input  class="input" type="text" id="telefono" name=""  placeholder="Teléfono"
                            required autocomplete="off"
                            v-model="form.telefono"/>
                            <label class="label">Mensaje</label>
                            <textarea name="" id="Mensaje" cols="10"   placeholder="Escribe aqui su mensaje" required v-model="form.mensaje"></textarea>
                            <div class="button1">
                           <a :href="`https://api.whatsapp.com/send?phone=5493415320077&text=Hola%20mi%20nombre%20es%20:${form.nombreyapellido},%20${form.email},%20${form.telefono},asunto:%20${form.mensaje}`" target="_blank">
                             <b-button  id="button1">ENVIAR</b-button>
                            </a>
                            </div>   
                        </form>
            </div>
            <div class="text">
                <h1 class="h1">¿Querés Adoptar?</h1>
                <p>Si tenés alguna consulta,envianos un mensaje.Caso contrario,completá <u>Formulario de Adopción</u></p>
            </div>
        </div>
    </section>    
        
    <div class="">
        <div class="icon" >
            <div class="container1">
                <div class="icon-inicial">
                    <div class="icon0">
                        <img src="/assets/GyB.png" alt="logo">
                    </div>
                </div> 
                <div class="icon-inicial1">
                    <div class="icon1">
                        <a href="https://api.whatsapp.com/send?phone=5493415320077&text=Hola+quiero+info">
                            <img src="/assets/Vector.png" alt="Whatsapp">
                        </a>
                    </div>
                    <div class="icon2">
                        <a href="https://www.instagram.com/garrasybigotesrosario/">
                            <img src="/assets/Vector(1).png" alt="insta">
                        </a>
                    </div>
                    <div class="icon3">
                        <a href="https://www.facebook.com/profile.php?id=100063809495931">
                            <img src="/assets/Vector(2).png" alt="facebook">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    </body>
</template>


<script>
  

export default {
  name: 'form-component',
  data(){
      return{
        form: {
            nombreyapellido:"",
            email: "",
            telefono:"",
            mensaje:"",

           
        },
       methods: {
           onSubmit(event){
           event.preventDefault();

           window.open(`http://wa.me/$595971488547?text=Hola%20mi%20nombre%20es%20,${this.form.nombreyapellido},%20
           ${this.form.email},%20${this.form.telefono},asunto:%20${this.form.Mensaje}`, '_blank');
      }    
       }  
    };
  },
	
};
</script>

<style>


*{
    padding:0;
    margin: 0;
   
}


body {
    margin:0;
    padding:0;

}
  

.container img{
    margin-left: -67px;
}
@media (min-width: 425px) {
   .container img{
     margin-left: auto;
   height: 84px;
   }  
}
@media (min-width: 768px){
   .container img {
    margin-left: -29px;;
     
   }
}



html{
    overflow-x: hidden;
   
}

.img-fondo {
    background: url(@/assets/background.png);
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    display: flex;
    background-position-x: 92%;
    margin:0;
    height:100vh;
    padding:89px;
    box-sizing: border-box;

}
@media (min-width: 425px){
    .img-fondo{
    height:100vh;
    width: 100vw;
    padding: 0;
    }
}
@media (min-width: 768px){
  .img-fondo{
    height:100vh;
    width: 100vw;
    padding: 0;
     background-position-x: 65%;
    }
}




.container {
    width: 80%;
    /* display: flex;
    flex-direction: column; */

}

img {
    height: 70px;
    
}
.img-fondo p {
    width: auto;
    font-family: 'Alata', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media(min-width: 425px){
    .img-fondo p {
        width:  384px;
        font-size: auto;
       line-height: 55px;
       

    }
}

@media (min-width: 768px){
    .img-fondo p {
        font-size: 36px;

    }
}

@media (min-width: 1024px){
    .img-fondo p {
        font-size: 40px;
    }
}

 
button {
    border :0;
    width: 153.19px;
    height: 27.77px;
    left: 14.9px;
    top: 6.08px;
    margin-top: 10px;
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    font-size: 14px;
    background-color:#FFD0D0;
    color:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
}
button:hover {
    opacity: 0.8;
    background-color:#e9a8a8;
  }
@media (min-width: 425px){
    button {
    width: 221px;
    height: 53px;
    left: 149px;
    top: 595px;
    font-size: 24px;
      border-radius: 5px;
    }
}






.adopta  h1  {
    width: 260px;
    display: inline;
    font-family: 'Pacifico', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 70px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
.img-corazon img {
    width: 35.77px;
    height: 34.3px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: inline;
}

.adopta  {
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: #FFBFBF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

}
.gatitos {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
  }
  .gatitos img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
   
  .gatitos img:nth-child(4),
  .gatitos img:nth-child(5) {
    display: none;
  }
  @media (min-width: 425px) {
    .adopta {
      flex-direction: row;
      gap: 40px;
     
    }
    
    .gatitos {
      justify-content: space-between;
      width: 1062px;

    }
   
    .gatitos img:nth-child(4),
    .gatitos img:nth-child(5) {
      display: inline-flex;
    }

    .gatitos img{
        width: 80px;
        height: 80px;
        
        }
          @media (min-width: 768px) {
      .gatitos img{
    width: 100px;
    height: 100px;
        }
    }
    @media (min-width: 1024px) {
        .gatitos img{
            width:131px;
            height:131px;
        }
     }
}

.formulario {
    background-image: url(@/assets/fondoform.png) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:auto;
    margin:0;
}

@media(min-width: 425px){
    .formulario {
        width: 100vw;
        height: 100vh;
         flex-direction: row;
    }
}
@media(min-width: 769px){
    .formulario{
         justify-content: center;
    }
}

 

form {
    width: auto;
    margin: 17px;
    background: #FFBFBF;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #FFBFBF;
    order:1;
}
@media(min-width: 425px){
    form {
        margin: auto;
        max-width: 417px;
        order:0;
    }
}
@media(min-width: 768px){
    form {
    margin: auto;
       
    }
}
@media(min-width: 1092px){
      form{
     width:560px;
      }
   
}


input, textarea ,label {
    width:100%;
    margin-bottom: 20px;
    padding:7px;
    box-sizing: border-box;
    justify-content: center;
    padding-top: 20px;
    color:#f7afaf;
    border: none;
    font-family: 'Alata', sans-serif;


}
@media (min-width: 425px){
.input, textarea ,.label{
    font-size: 21px;
    border-radius: 3px;
}
}
.label{
    color: #ffffff;
}
#button1 {
     border :0;
    width: 153.19px;
    height: 27.77px;
    left: 14.9px;
    top: 6.08px;
    margin-top: 10px;
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    font-size: 14px;
    background-color:#FFD0D0;
    color:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
 @media (min-width: 425px){
    #button1 {
    width: 221px;
    height: 53px;
    left: 149px;
    top: 595px;
    font-size: 24px;
      border-radius: 5px;
    }
}
a {
  color: white  
}


.button1 {
    display: flex;
    justify-content:flex-end;
    

}


textarea{
    min-height: 100px;
    max-width: 200px;
    max-width: 100%;

}
.container-formulario{
    display:grid;
    grid-template-rows: auto auto;
    
    align-items: center;
}
@media (min-width: 425px){
    .container-formulario{
        grid-template-columns: auto auto;
    }
}

.formulario p , .formulario .h1{
    width:377px;
    

}

.text {
    padding: 20px;
    background-color:#FFBFBF;
    box-sizing: border-box;
    border: 1px solid #ffbfbf;
}

.text h1 {
    font-family: 'Alata', sans-serif;
    color: #ffffff;
    width: 367px;
    font-size: 35px;
    line-height: 48px;
    text-align: center;
    text-justify: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.text p {
    font-family: 'Alata', sans-serif;
    height: 167px;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    text-justify: center;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    color: #FFFFFF;
}
@media (min-width: 425px){
    .text p {
     line-height: auto;
     font-size: auto;
    }
}

@media (min-width: 768px){
    .text p {
        font-size:28px;
        line-height:31px;
    }
}
@media (min-width: 1092px){
    .text p {
    line-height: 34px;
     font-size: 31px;
    }

}
 
.icon {
    background-image: url(@/assets/fondoform.png) ;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    align-self: flex-end;
    justify-content:center;
}
@media (min-width: 425px) {
    .icon {
   display:flex;
}
}

.container1{
    max-width: 1092px;
}

.container1 img {
    height: 50px;
    
}

@media (min-width: 425px){
    .container1 img {
        display: flex;
            height: 70px;
    }

}

 .icon .container1  {
    display:flex;
    justify-content: space-between;
  

 }
@media (min-width: 425px) {
    .icon .container1 {
        width: 979px;
        padding: 10px;
}
}

 .icon-inicial1 {
    display: flex;
    justify-content: flex-end;
 }



 .icon0{
     max-width: 980px;
 }

/*.icon0 img {
    margin-right: auto;
}*/

</style>
