<template>
	<div class="container">
		<div class="image">
		<img :src="info.image" />
		</div>
		<slot>
			<h4 class="title">{{ info.title }}</h4>
		</slot>
		<slot name="icons">
			<h4 class="price">{{ info.price }} грн</h4>
		</slot>
		<button>Купити</button>
	</div>
</template>

<script>
	export default {
		name:'ProductCard',
		props: {
			info: {
				type: Object,
				required:true
			},
		},
	}
</script>

<style lang="scss" scoped>
.container{
	padding: 20px;
	width: 200px;
	// height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border:solid 3px green;
	border-radius: 20px; 
} 
.image{
	width: 200px;
	height: 200px;
}
.image img{
	max-width: 65%;
}

.title {
	margin: 10px;
font-size: 20px;
 

}

.price {
	margin: 10px;
}
button{
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
</style>