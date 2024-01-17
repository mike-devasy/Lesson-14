<template>
	<minor-master-page>
		<div class="container">
<h2>Правила купівлі</h2>
<h3>Купуємо багато</h3>
<h3>Платимо швидко</h3>
<h3>Насолоджуємось товаром</h3>
	</div>
	</minor-master-page>

</template>

<script>
import MinorMasterPage from '../masterpages/MinorMasterPage.vue'
	export default {
  components: { MinorMasterPage },
		name:'ShoppingRulesView'
	}
</script>

<style lang="scss" scoped>
.container{
	padding-left: 270px;
	text-align: left;
}
</style>