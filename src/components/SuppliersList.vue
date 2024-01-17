<template>
	<div class="container">
<product-card v-for="supplier in getSuppliers"
  :info="{
		title:supplier.title,
		image:supplier.imgSrc,
		price:supplier.labels,
	}" :key="supplier.id" >
 <template #icons>
		<div class="icons">
			<div><img :src="supplier.labels[0]" ></div>
			<div><img :src="supplier.labels[1]" ></div>
		</div>
	</template>

</product-card>

	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapGetters } from 'vuex';
	export default {
		name:'SuppliersList',
		components:{
			ProductCard
		},
		computed: {
	 ...mapGetters(['getSuppliers'])
		},
	}
</script>

<style lang="scss" scoped>
.container{
	padding: 30px;
	display: flex;
	gap: 20px;
}
.icons{
	display: flex;
	gap: 30px;
}
</style>