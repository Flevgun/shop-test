import axios from 'axios';
import {createStore} from 'vuex';


// d5dbe535c3864dcd5515c73bb8f7ed8c 



let store = createStore ( {
    state: {
        products: [],
        cart: [],
        cardInfo: null,
        cardNumber: null,
        cardHolder: null,
        cardExpires: null,

    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products) =>{
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length){
                let isProductExists = false;
                state.cart.map(function(item){
                    if(item.article === product.article){
                        isProductExists = true;
                        item.count++
                    }
                })
                if(!isProductExists){
                state.cart.push(product)

                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].count++
        },
        DECREMENT: (state, index) => {
            if(state.cart[index].count > 1){
                state.cart[index].count--
            }else if(state.cart[index].count <= 1){
                state.cart.splice(index, 1)
            }
        },
        UPDATE_CARD_INFO(state, payload) {
            state.cardInfo = payload;
          },
        UPDATE_CARD_NUMBER: (state, payload) => {
            state.cardNumber = payload
        },
        UPDATE_CARD_HOLDER: (state, payload) => {
            state.cardHolder = payload
        },
        UPDATE_CARD_EXPIRES: (state, payload) => {
            state.cardExpires = payload
        },
    },
    actions: {
       async GET_PRODUCTS({commit}) {
        try {
                const products = await axios('http://localhost:3000/products', {
                    method: "GET"
                });
                commit('SET_PRODUCT_TO_STATE', products.data);
                return products;
            } catch (error) {
                console.log(error);
                return error;
            }
       },
       ADD_TO_CART({commit}, product){
        commit('SET_CART', product)
       },
       INCREMENT_CART_ITEM({commit}, index){
        commit('INCREMENT', index)
       },
       DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT', index)
       },
       DELETE_FROM_CART({commit}, index){
        commit('REMOVE_FROM_CART', index)
       },
       GET_CARD_INFO({commit}, CARD_NUMBER){
        commit('UPDATE_CARD_NUMBER', CARD_NUMBER)
       },
       async fetchCardInfo({ commit }, payload) {
        const res = await fetch(
          `https://api.binking.io/form?apiKey=d5dbe535c3864dcd5515c73bb8f7ed8c&cardNumber=${payload}&sandbox=1`
        );
        const cardInfo = await res.json();
        this.CARD_INFO = cardInfo;
        await commit("UPDATE_CARD_INFO", cardInfo);
      }
       
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state){
            return state.cart;
        },
        CARD_INFO(state) {
            return state.cardInfo;
          },
        CARD_NUMBER(state){
            return state.cardNumber;
        },
        CARD_HOLDER(state){
            return state.cardHolder;
        },
        CARD_EXPIRES(state){
            return state.cardExpires;
        },
    }
})

export default store;



