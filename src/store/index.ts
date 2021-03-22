import { Store } from 'vuex'
import { initializeStores } from '@/store/modules'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
}


const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]
