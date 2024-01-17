<template>
  <main-master-page>
<h1>Вітаємо!</h1>
<h3>Сподіваємось що ви будете чемними та купите що-небудь...</h3>
<template #right-footer><h3>Власник:баба Галя</h3><img src="../assets/grand-mom.jpg" alt=""></template>
	</main-master-page>
</template>

<script>
// @ is an alias to /src
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
export default {
  name: "HomeView",
  components: {
		MainMasterPage,
  },
};
</script>
