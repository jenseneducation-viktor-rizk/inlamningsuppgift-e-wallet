import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function setLocalStorage(state) {
    const parsed = JSON.stringify(state.cards)
    localStorage.setItem('cards', parsed)
}

export default new Vuex.Store({
    state: {
        cards: []
    },
    mutations: {
        readLocalStorage(state){
            state.cards = JSON.parse(localStorage.getItem('cards'));
        },
        removeCard(state, activeIndex) {
            state.cards.splice(activeIndex, 1)
            setLocalStorage(state)
        },
        pushCard(state, newCard) {
            state.cards.push(newCard);
            setLocalStorage(state)
        },
    },
    actions: {
        readThisLocalStorage(context){
            context.commit('readLocalStorage')
        },
        addCard(context, newCard){
            context.commit('pushCard', newCard)
        },
        removeThisCard(context, activeIndex){
            context.commit('removeCard', activeIndex)
        }
    }
})

