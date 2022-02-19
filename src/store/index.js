import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const persist = new VuexPersist({
    key: 'state',
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        learned_recipes: [],
        mastered_recipes: [],
        pinned_recipes: []
    },
    mutations: {
        markRecipeCompleted(state, recipeID) {
            state.completed_recipes += recipeID
        },
        resetRecipeList(state) {
            state.learned_recipes = []
            state.mastered_recipes = []
        }
    },
    actions: {},
    modules: {},
    plugins: [
        persist.plugin
    ]
})
