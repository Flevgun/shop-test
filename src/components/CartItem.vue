<template>
  <div class="cart-item">
    <p>{{cart_item_data.name}}</p>

    <span class="count_all">
    <span class="count_btn" @click="decrementItem">-</span>
    <span class="count_text">{{cart_item_data.count}}</span>
    <span class="count_btn" @click="incrementItem">+</span>
    </span>
    
    <p>{{cart_item_data.price*cart_item_data.count}} р.</p>
    <!-- <button @click="deleteFromCart">Delete</button> -->
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
       this.$emit('increment')
    },
    deleteFromCart(){ 
      this.$emit('deleteFromCart')
    }
  },
  computed:{
  }
}
</script>

<style>
 .cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
   margin-bottom: 16px;
 }
 .count_btn {
  cursor: pointer;
  font-weight: bolder;
  font-size: 20px;
  margin: 0px 8px;
 }
 .count_text {
  flex-basis: 25%;
    box-shadow: 0 0 8px 0 #aeaeaa;
    padding: 8px 32px;
    margin-bottom: 8px;
 }
 .count_all {
  margin-left: 450px;
 }
</style>