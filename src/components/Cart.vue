<template>
  <div class="cart">
    <!-- <router-link :to="{name: 'catalog'}">
    <div class="catalog__link_to_catolog">Назад к каталогу</div>
    </router-link> -->
    <h1>Корзина</h1>
    <Card/>
    <CardForm/>
    <!-- <p v-if="!CART.length">Корзина пуста...</p> -->
    <CartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total" >
      <p class="total__name" >Сумма к оплате: {{cartTotalCost}} р.</p>
      <button class="btn_buy">Купить</button>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import CardForm from './CardForm.vue'
import CartItem from './CartItem.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "cart",
  components: {
    CartItem,
    CardForm,
    Card,
    
  },
  props: {
    cart_data: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  },
  computed:{
    ...mapGetters([
      'CART',
      
    ]),
    cartTotalCost(){
      let result = []

      if(this.CART.length){
        for (let item of this.CART){
          result.push(item.price * item.count)
        }

        result = result.reduce(function(sum,el){
          return sum + el;
        })
        return result
      }else {
        return 0;
      }
      }
      
  }
}
</script>

<style>
  .cart{
    position: relative;
    margin-bottom: 100px;
  }
  .catalog__link_to_catolog{
    position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px #aeaeae;
  }
  .cart__total{
    display: flex;
    justify-content: space-between;
    /* position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color: #ffffff;
    font-size: 20px; */
  }
  .total__name{
    margin-right: 16px;
  }
  .btn_buy{
    padding: 8px 16px;
    background: green;
    color: #000000;
    font-weight: bold;
  }
</style>