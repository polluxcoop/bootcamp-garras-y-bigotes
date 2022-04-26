<template>
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
</template>


<script>
export default {
    props: {

    },

    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<style scoped>

.container img{
margin-left: -70px;

}
@media (min-width: 600px) {
   .container img{
   height: 84px;
   }  
}
@media (min-width: 768px){
   .container img {
    margin-left: -29px;
    height:96px;
     
   }
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
    padding:89px;
    box-sizing: border-box;

}
@media (min-width: 600px){
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
    background-position-x: 76%;;
    }
}
@media (min-width: 1092px) {
    .img-fondo{ 
    background-repeat: no-repeat;
    background-size: cover;
    }
}





.container {
    width: 81%;
    /* display: flex;
    flex-direction: column; */

}

img {
    height: 70px;
    
}
.img-fondo p {
    font-family: 'Alata', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media(min-width: 600px){
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
@media (min-width: 600px){
    button {
    width: 221px;
    height: 53px;
    left: 149px;
    top: 595px;
    font-size: 24px;
      border-radius: 5px;
    }
}

</style>

