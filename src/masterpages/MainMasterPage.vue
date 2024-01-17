<template>
	<div>
		<nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/products">Товари</router-link> |
    <router-link to="/suppliers">Постачальники</router-link> |
    <router-link to="/contacts">Контакти</router-link> |
    <router-link to="/rules">Правила купівлі</router-link> |
  </nav>
 <slot></slot>
 <div class="footer-container">
	<slot name="left-footer"><h3>Рейтинг магазину: <span>54449</span></h3></slot>
	<slot name="right-footer"><h3>Статус: <span>Відкрито</span></h3></slot>
 </div>
	</div>
</template>

<script>
	export default {
		name:'MainMasterPage'
	}
</script>

<style lang="scss" scoped>
h3 span{
	color:rgb(113, 255, 47);
}
.footer-container{
	display: flex;
	justify-content: space-between;
	margin:  30px 100px 0 20px;
}
</style>