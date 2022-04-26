<template>
  <div class="icon">
    <div class="container1">
      <div class="icon-inicial">
        <div class="icon0">
          <img src="/assets/GyB.png" alt="logo" />
        </div>
      </div>
      <div class="icon-inicial1">
        <div class="icon1">
          <a
            href="https://api.whatsapp.com/send?phone=5493415324077&text=Hola+quiero+info"
            target="_blank"
          >
            <img src="/assets/Vector.png" alt="Whatsapp" />
          </a>
        </div>
        <div class="icon2">
          <a
            href="https://www.instagram.com/garrasybigotesrosario"
            target="_blank"
          >
            <img src="/assets/Vector(1).png" alt="insta" />
          </a>
        </div>
        <div class="icon3">
          <a
            href="https://www.facebook.com/profile.php?id=100063809495931"
            target="_blank"
          >
            <img src="/assets/Vector(2).png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>







<script>
export default {
  data() {
    return {};
  },
};
</script>



<style scoped>
.icon {
  background-image: url(@/assets/fondoform.png);
  background-repeat: no-repeat;
  background-size: cover;
  align-self: flex-end;
  justify-content: center;
}
@media (min-width: 600px) {
  .icon {
    display: flex;
    width: 100vw;
  }
}

.container1 {
  max-width: 1306px;
}

.container1 img {
  height: 50px;
}

@media (min-width: 600px) {
  .container1 img {
    display: flex;
    height: 70px;
  }
}

.icon .container1 {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 600px) {
  .icon .container1 {
    width: 1306px;
    padding: 10px;
  }
}

.icon-inicial1 {
  display: flex;
  justify-content: flex-end;
}
</style>