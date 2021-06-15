import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        profile: clientData.profile,
        addedAnnouncements: clientData.addedAnnouncements
    }
})
