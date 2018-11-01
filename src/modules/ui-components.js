
import Vue from 'vue'
import LLheader from '../components/commons/LL-header.vue'
import LLfooter from '../components/commons/LL-footer.vue'
import LLbarcode from '../components/commons/LL-barcode.vue'

import GoodCommonItem from '../components/commons/GoodCommonItem.vue'
import CategoryList from '../components/commons/CategoryList.vue'


Vue.component('LL-header', LLheader)
Vue.component('LL-footer', LLfooter)
Vue.component('LL-barcode', LLbarcode)

Vue.component('good-common-item', GoodCommonItem)
Vue.component('category-list', CategoryList)