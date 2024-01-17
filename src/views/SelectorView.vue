<template>
 <div class="buttons">
	<button class="red">Список Товарів</button>
	<button class="blue">Форма для додавання нового товару</button>
 </div>
</template>

<script>
	export default {
		name:'SelectorView'
	}
</script>

<style lang="scss" scoped>
button{
	margin-right: 20px;

	font-size: 20px;
	padding: 5px 40px;
	border-radius: 7px;
	border:none;
	font-weight: 600;
	background-color: rgb(66, 239, 132);
}
button:hover{
	cursor:pointer;
	color:white
}
.red{
	background-color: rgb(239, 66, 66);
}
</style>