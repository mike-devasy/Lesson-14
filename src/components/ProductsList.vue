<template>
	<div class="container">
<product-card v-for="product in getFoods" :key="product.id" :info="{
	image: product.imgSrc,
  title: product.title,
	price: product.price
}"/> 
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from './ProductCard.vue'
	export default {
  components: { ProductCard },
		name:'ProductsList',
		computed:{
			...mapGetters(['getFoods'])
		}
	}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
	column-gap: 20px;
}
</style>