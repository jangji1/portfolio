import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { getCategories, getCategory, deleteCategory } from '@/api/about/category'
import { Category } from '@/model/about/category'

@Module({ namespaced: true, name: 'modules/about/category', stateFactory: true })
export default class CategoryModule extends VuexModule {
  public categoryNames: string[] = []
  public category: Category = { catgNm: '', pCatgSeq: 0 }

  @Mutation
  public setCategoryNames(categoryNames: string[]) {
    this.categoryNames = categoryNames
  }

  @Mutation
  public setCategory(category: Category) {
    this.category = category
  }

  @Action
  public async getCategoryNames() {
    const categories = await getCategories()
    return categories.map(category => category.catgNm)
  }

  @Action
  public async fetchCategoryNames() {
    const categories = await getCategories()
    this.setCategoryNames(categories.map(category => category.catgNm))
  }

  @Action
  public async getCategory() {
    const category = await getCategory('test')
    return category
  }

  @Action async fetchCategory() {
    const category = await getCategory('test')
    this.setCategory(category)
  }

  @Action
  public deleteCategory() {
    try {
      deleteCategory('test')
    } catch (e) {
      // not error
    }
  }
}
