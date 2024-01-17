 <template>
 <div class="container">
	<main-master-page>
	<h3>Оберіть продукти</h3>
	<products-list/>

	</main-master-page>
	<div class="links">
		<router-link :to="{ name: 'selector' }"></router-link>
				<router-link :to="{ name: 'editor' }"></router-link>
	</div>
	<router-view v-if="$route.name === 'selector'"></router-view>
<router-view v-if="$route.name === 'editor'"></router-view>

 </div>

 </template>
 
 <script>
 import MainMasterPage from '@/masterpages/MainMasterPage.vue';
 import ProductsList from '@/components/ProductsList.vue';
	export default {
		name:'ProductsView',
		components:{MainMasterPage, ProductsList}
	}
 </script>
 
 <style lang="scss" scoped>
 .container{
	padding-left: 20px;
 }
 h3{
	padding-left: 20px;
	text-align: left;
 }
 .links{
	padding-left: 270px;
	font-size: 25px;
	margin: 30px;
	display: flex;
	gap: 20px;
 
 }
 </style>
