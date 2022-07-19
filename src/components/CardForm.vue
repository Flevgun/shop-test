<template>
  <div class="card-wrapper">
    <form class="card__form">
      <div class="card__form-line">
        <label 
          for="card-number" 
          class="card__form-line-title"
        >Номер карты</label>
        <input
          type="text"
          id="card-number"
          name="card-number"
          class="card__form-line-input"
          placeholder="0000 0000 0000 0000"
          v-model="CARD_NUMBER"
          @keyup="getCardInfo"
        />
      </div>

      <div class="card__form-line">
        <label 
            for="card-holder" 
            class="card__form-line-title"
        >Имя владельца</label>
        <input
          type="text"
          id="card-holder"
          name="card-holder"
          class="card__form-line-input"
          placeholder="IVAN IVANOV"
          v-model="CARD_HOLDER"
          @keyup="$store.commit('UPDATE_CARD_HOLDER', CARD_HOLDER)"
          />
      </div>
      <div class="card__form-line-double">
        <div class="card__form-line">
          <label 
            for="card-expires" 
            class="card__form-line-title"
          >Срок действия</label>
          <input
            type="text"
            id="card-expires"
            name="card-expires"
            class="card__form-line-input"
            placeholder="MM/YY"
            v-model="CARD_EXPIRES"
            @keyup="$store.commit('UPDATE_CARD_EXPIRES', CARD_EXPIRES)"
           />
        </div>

        <div class="card__form-line">
          <label 
            for="card-cvv" 
            class="card__form-line-title"
          >CVV</label>
          <input
            type="password"
            id="card-cvv"
            name="card-cvv"
            class="card__form-line-input"
            placeholder="123"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "card-form",
  data(){
    return{
      CARD_NUMBER: this.$store.getters.CARD_NUMBER,
    }
  },
  computed:{
     cardInfo() {
      return this.$store.getters.CARD_INFO
    },
  },
  methods: {
    ...mapActions([
      'GET_CARD_INFO'
    ]),
    getCardInfo(){
      this.$store.dispatch("fetchCardInfo", this.CARD_NUMBER);
      this.$store.commit('UPDATE_CARD_NUMBER', this.CARD_NUMBER)
    }
  }
}
</script>

<style>
.card-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
}
.card__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  background-color: #ececec;
  padding-bottom: 30px;
  border-radius: 15px;
  padding-top: 70px;
}
.card__form-line {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 20px;
}
.card__form-line-input {
  border: 0;
  height: 35px;
  border-radius: 20px;
  padding-left: 15px;
  font-size: 16px;
  outline: none;
}
.card__form-line-double {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.card__form-line-double .card__form-line {
  width: 40%;
}
</style>