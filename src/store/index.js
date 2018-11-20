/**
 * Created by hyt on 2017/1/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import containerC from './modules/containerC';


Vue.use(Vuex);

let i = 0;

const store = new Vuex.Store({
    state: {
  
    },
    mutations:{
  
    },
    actions:{
   
    },
    modules: {
        containerC
    }
});

export default store





