<template>
  <div class="catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
    <img  class="catalog__link_to_cart__img" src="../assets/images/checkout.png" alt="В корзину" />
    <div class="catalog__link_to_cart"> {{CART.length}}</div>
    <img src="" alt="">
    </router-link>
       
    <h1>Список товаров</h1>
    <div class="catalog__list">
        <CatalogItem
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "catalog",
    components: {
        CatalogItem
    },
    props: {},
    data(){
        return{
            
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_CART'
        ]),
        addToCart(data){
           this.ADD_TO_CART(data);
        } 
    },
    mounted(){
        this.GET_PRODUCTS()
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    }

}
</script>

<style>
    .catalog__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .catalog__link_to_cart{
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
    }
    .catalog__link_to_cart__img  {
        position: absolute;
        top: 0px;
        right: 20px;
        padding: 8px 16px;
    }
</style>