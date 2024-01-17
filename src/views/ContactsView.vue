<template>
	<div>
<minor-master-page>
	<h2>Наші контакти</h2>
<h3>Адреса магазину: біля будинку Баби Галі</h3>
<h3>Менеджер: Дід Петро</h3>
<h3>Заступник: онука Софійка</h3>

</minor-master-page>
	</div>
</template>

<script>
import MinorMasterPage from '../masterpages/MinorMasterPage.vue'
	export default {
  components: { MinorMasterPage },
		name:'ContactsView'
	}
</script>

<style lang="scss" scoped>

h2, h3{
	padding-left: 270px;
	text-align: left;
}
</style>