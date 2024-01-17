<template>
 <div class="buttons">
	<button class="red">Фільтри</button>
	<button class="blue">Список Товарів</button>
 </div>
</template>

<script>
	export default {
		name:'EditorView',
 
	}
</script>

<style lang="scss" scoped>
.buttons{
}
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