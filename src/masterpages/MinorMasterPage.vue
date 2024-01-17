<template>
	<div>
<router-link to="/"><h2>На головну</h2></router-link>
	</div>
	<slot></slot>
	<h3>Галерея</h3>
<div class="gallery">
	<img src="../assets/авто.jpg">
	<img src="../assets/двері.jpg">
	<img src="../assets/дерево.jpg">
	<img src="../assets/крісло.jpg">
</div>
</template>

<script>
	export default {
		name:'MinorMasterPage'
	}
</script>

<style lang="scss" scoped>
.gallery{
	margin-top: 30px;
	display: flex;
	gap: 20px;
	justify-content: center;
}
h3{
	padding-left: 270px;
	text-align: left;
}
</style>