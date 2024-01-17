<template>
	<div class="container">
<main-master-page>
	<h3 class="title">Оберіть постачальника</h3>

<suppliers-list></suppliers-list>


	<template #left-footer>
		<h3>Найбільш популярний: <span>Єконом</span></h3>
	</template>
</main-master-page>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import SuppliersList from '@/components/SuppliersList.vue';
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
	export default {
		name:'SuppliersView',
		components:{MainMasterPage, SuppliersList},
		computed:{
			...mapGetters(['getSuppliers'])
		}
	}
</script>

<style lang="scss" scoped>
h3 span{
	color:rgb(113, 255, 47);
}
.title{
	text-align: left;
padding-left: 30px;
}
</style>