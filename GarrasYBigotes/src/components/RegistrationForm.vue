<template>
  <section class="">
    <div class="formulario" style="overflow: hidden">
      <div class="container-formulario">
        <form>
          <div class="form-control">
            <label>Nombre y Apellido:</label>
            <input
              type="text"
              name=""
              id="nombreyapellido"
              placeholder="Nombre y Apellido "
              required
              autocomplete="off"
              v-model="form.nombreyapellido"
            />
            <p class="error" v-if="nombreAlert">Falta completar este campo</p>
          </div>
          <div class="form-control">
            <label>E-mail</label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="E-mail"
              required
              autocomplete="off"
              v-model="form.email"
            />
            <p class="error" v-if="emailAlert">Falta completar este campo</p>
          </div>
          <div class="form-control">
            <label>Teléfono:</label>
            <input
              type="text"
              id="telefono"
              name=""
              placeholder="Teléfono"
              required
              autocomplete="off"
              v-model="form.telefono"
            />
            <p class="error" v-if="telefonoAlert">Falta completar este campo</p>
          </div>
          <div class="form-control">
            <label>Mensaje:</label>
            <textarea
              type="text"
              name=""
              id="Mensaje"
              cols="10"
              placeholder="Escribe aqui su mensaje"
              required
              v-model="form.mensaje"
            ></textarea>
            <p class="error" v-if="mensajeAlert">Falta completar este campo</p>
          </div>
          <div class="button1">
            <a
              :href="`https://api.whatsapp.com/send?phone=5493415320477&text=Hola%20mi%20nombre%20es%20:${form.nombreyapellido},%20${form.email},%20${form.telefono},asunto:%20${form.mensaje}`"
              target="_blank"
            >
              <button type="button" id="button1" @click="button">ENVIAR</button>
            </a>
          </div>
        </form>
      </div>
      <div class="text">
        <h1 class="h1">¿Querés Adoptar?</h1>
        <p>
          Si tenés alguna consulta,envianos un mensaje.Caso contrario,completá
          <u>Formulario de Adopción</u>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        nombreyapellido: "",
        email: "",
        telefono: "",
        mensaje: "",
        nombreyapellidoAlert: false,
        emailAlert: false,
        telefonoAlert: false,
        mensajeAlert: false,
      },
    };
  },
  methods: {
    button() {
      const validacion = this.validateForm();
      if (validacion) {
        this.$emit("button", {
          nombreyapellido: this.nombreyapellido,
          email: this.email,
          telefono: this.telefono,
          mensaje: this.mensaje,
        });
      }
    },
    validateForm: function () {
      let resultadoValidacion = true;
      if (!this.nombreyapellido) {
        this.nombreyapellidoAlert = true;
        resultadoValidacion = false;
      }
      if (!this.email) {
        this.emailAlert = true;
        resultadoValidacion = false;
      }
      if (this.email && this.email.length < 5) {
        this.emailAlert = true;
        resultadoValidacion = false;
      }
      if (!this.telefono) {
        this.telefonoAlert = true;
        resultadoValidacion = false;
      }
      if (!this.mensaje) {
        this.mensajeAlert = true;
        resultadoValidacion = false;
      }
      return resultadoValidacion;
    },
  },
};
</script>



<style scoped>
.formulario {
  background-image: url(@/assets/fondoform.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

@media (min-width: 600px) {
  .formulario {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
  }
}
@media (min-width: 769px) {
  .formulario {
    justify-content: center;
  }
}

form {
  width: auto;
  margin: 17px;
  background: #ffbfbf;
  padding: 10px 20px;
  max-width: 417px;
  box-sizing: border-box;
  border: 1px solid #ffbfbf;
  order: 1;
}
@media (min-width: 600px) {
  form {
    margin: 0;
    max-width: auto;
  }
}
@media (min-width: 768px) {
  form {
    max-width: 500px;
  }
}
@media (min-width: 1092px) {
  form {
    width: 560px;
  }
}

input,
textarea,
label {
  width: 100%;
  margin-bottom: 20px;
  padding: 7px;
  box-sizing: border-box;
  justify-content: center;
  padding-top: 20px;
  font-size: 18px;
  color: #f7afaf;
  border: none;
  font-family: "Alata", sans-serif;
}
@media (min-width: 600px) {
  .input,
  textarea,
  .label {
    font-size: 21px;
    border-radius: 3px;
  }
}
label {
  color: #ffffff;
}
#button1 {
  border: 0;
  width: 153.19px;
  height: 27.77px;
  left: 14.9px;
  top: 6.08px;
  margin-top: 10px;
  font-family: "Alata", sans-serif;
  font-weight: 400;
  font-size: 14px;
  background-color: #ffd0d0;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media (min-width: 600px) {
  #button1 {
    width: 221px;
    height: 53px;
    left: 149px;
    top: 595px;
    font-size: 24px;
    border-radius: 5px;
  }
}

.button1 {
  display: flex;
  justify-content: flex-end;
}

textarea {
  min-height: 100px;
  max-width: 100%;
}
.container-formulario {
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  order: 1;
}
@media (min-width: 600px) {
  .container-formulario {
    grid-template-columns: auto auto;
    order: 0;
  }
}

.formulario p,
.formulario .h1 {
  width: 377px;
}

.text {
  padding: 77px;
  margin: 27px;
  background-color: #ffbfbf;
  box-sizing: border-box;
  border: 1px solid #ffbfbf;
}
@media (min-width: 600px) {
  .text {
    order: 0;
    padding: 20px;
    margin: 0;
  }
}

.text h1 {
  font-family: "Alata", sans-serif;
  color: #ffffff;
  width: 367px;
  font-size: 35px;
  line-height: 48px;
  text-align: center;
  text-justify: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.text p {
  font-family: "Alata", sans-serif;
  height: 167px;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  text-justify: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  color: #ffffff;
}

@media (min-width: 600px) {
  .text p {
    line-height: auto;
    font-size: auto;
  }
}

@media (min-width: 768px) {
  .text p {
    font-size: 28px;
    line-height: 31px;
  }
}
@media (min-width: 1092px) {
  .text p {
    line-height: 34px;
    font-size: 31px;
  }
}
p {
  color: #ffffff;
}
</style>