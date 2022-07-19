<template>
  <div class="card">
    <img 
      class="card__image"
      src="bankLogo" 
      alt="Иконка банка"
      v-show="bankLogo"
      />
      <p class="card__number">{{CARD_NUMBER}}</p>
      <div class="card__footer">
        <p class="card__holder">Card holder<span class="card__holder_text">{{CARD_HOLDER}}</span></p>
        <p class="card__expires">Expires<span class="card__expires_text">{{CARD_EXPIRES}}</span></p>
      </div>
      <!-- <img 
        class="card__brand"
        src="brandLogo" 
        alt="cardLogo"
        v-show="brandLogo"
        > -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'card',
  computed: {
    ...mapGetters([
      'CARD_NUMBER',
      'CARD_HOLDER',
      'CARD_EXPIRES'
    ]),
    bankLogo() {
      return this.$store.getters.CARD_INFO?.bankLogoSmallOriginalSvg;
    },
    // brandLogo() {
    //   return this.$store.getters.cardInfo?.bankLogoBigOriginalSvg;
    // },

  },
  
  
}
</script>

<style>
  .card{
    background-color: rgb(0, 213, 0);
    border: 2px solid #000;
    min-height: 220px;
    width: 400px;
    border-radius: 20px;
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 28%;
    top: 60px;
  }
  .card__number{
    font-size: 26px;
    font-weight: bold;
    position: absolute;
    top: 30%;
  }
  .card__footer{
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 15px;
  }
  .card__holder{
    
    font-size: 16px;
  }
  .card__expires{
    
    font-size: 16px;
  }
  .card__image{
    position: absolute;
    top: 10px;
    left: 2px;
    width: 20%;
    height: 2px;
  }
  /* .card__brand{
    width: 100px;
    height: 50px;
    position: absolute;
    right: 0;
    bottom: 15%;
  } */
  .card__holder_text{
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .card__expires_text{
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>