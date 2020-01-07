import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home/index';
import course from './modules/course/index';
import essay from './modules/essay/index';
import form from './modules/form/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    course,
    form,
    essay
  }
})
