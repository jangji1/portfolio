import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import CategoryModule from '@/store/modules/about/category'

let CategoryStore: CategoryModule

export function initializeStores(store: Store<any>): void {
  CategoryStore = getModule(CategoryModule, store)
}

export {
  CategoryStore,
}
