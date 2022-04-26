<template>
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
</template>


<script>


export default ({
    data() {
        return {}
        
    },
})
</script>


<style >

.adopta  h1  {
  
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
        display: inline
    }
   
 
   .adopta  {
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background: #FFBFBF;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

    }
    .gatitos {
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
  
  @media (min-width: 600px) {
    .adopta {
      flex-direction: row;
     gap: 4px;
     
    }
    @media (min-width: 768px){
      .adopta{
       gap: 40px;
      }
    }
    
    .gatitos {
      justify-content: space-between;
      gap: 7px;

    }
    @media(min-width: 768px){
      .gatitos {
           gap: 9px;

      }
    }
    @media(min-width: 1092px){
      .gatitos {
        gap:105px;
      }
    }
    @media (min-width: 600px) {
        .gatitos img{
        width: 131px;
        height: 131px;
        }
    }
    .gatitos img:nth-child(4),
    .gatitos img:nth-child(5) {
      display: inline-flex;
    }
  
    .gatitos img{
        width: 70px;
        height: 70px;
        
      }
      @media (min-width: 768px) {
        .gatitos img{
          width: 80px;
          height: 80px;
        }
      }
        @media (min-width: 1024px) {
          .gatitos img{
              width:131px;
              height:131px;
          }
        }
    }
  
</style>
