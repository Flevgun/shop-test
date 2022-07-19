<template>
  <div class="catalog-item">
    <img src="https://via.placeholder.com/150" alt="img">
    <p class="catalog-item__name">{{product_data.name}}</p>
    <p class="catalog-item__price">Цена: {{product_data.price}} р.</p>
    <button class="catalog-item__btn btn" @click="addToCart">Купить</button>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style>
  .catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
  }
  .btn {
    padding: 8px 16px;
    background: red;
    color: #ffffff;
  }
</style>