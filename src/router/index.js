import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from '@/views/ProductsView.vue';
import SuppliersView from '@/views/SuppliersView.vue';
import ContactsView from '@/views/ContactsView.vue';
import ShoppingRulesView from '@/views/ShoppingRulesView.vue';
import SelectorView from '@/views/SelectorView';
import  EditorView from '@/views/EditorView';
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
		component: ProductsView,
		// exact: true,
		children:[
			{
        path: "", // Порожній шлях означає, що це дочірній маршрут за замовчуванням
        name: "products-default",
        component: ProductsView,
      },
			{
				path: "selector",
				name: "selector",
				component: SelectorView,
			},
			{
				path: "editor",
				name: "editor",
				component: EditorView,
			},
		]
    // component: () =>
      // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
	{
    path: "/suppliers",
    name: "suppliers",
    component: SuppliersView,
  },  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  }, 
	 {
    path: "/rules",
    name: "shopping-rules",
    component: ShoppingRulesView,
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
