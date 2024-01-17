import { createStore } from "vuex";

export default createStore({
  state: {
    foods: [
      {
        id: 1,
        title: "Макарони",
        price: 48,
        imgSrc: "https://cdn.27.ua/799/b7/b5/6600629_1.jpeg",
      },
      {
        id: 2,
        title: "Ковбаса",
        price: 320,
        imgSrc: "https://ua.all.biz/img/ua/catalog/8252249.jpeg",
      },
      {
        id: 3,
        title: "Хліб",
        price: 25,
        imgSrc: "https://shoco.ua/wp-content/uploads/2022/05/sajt-hlib.png",
      },
      {
        id: 4,
        title: "Сир",
        price: 298,
        imgSrc:
          "https://img3.zakaz.ua/2099160908354ed08660eec6aa8590ae/1679998072-s1350x1350.jpg",
      },
    ],
    suppliers: [
      {
        id: 1,
        title: "Політ",
        labels: [require("@/assets/plane.png"), require("@/assets/car.png")],
        imgSrc:
          "https://3.bp.blogspot.com/-Zdtt6-Wiprw/VmhxzhHZRFI/AAAAAAAAAzs/VPjvLlQJa2E/s1600/polit7.jpg",
      },
      {
        id: 2,
        title: "Надійність",
        labels: [require("@/assets/car.png")],
        imgSrc: "https://blokfort.com.ua/wp-content/uploads/2020/03/shchit.png",
      },
      {
        id: 3,
        title: "Швидка",
        labels: [require("@/assets/plane.png"), require("@/assets/car.png")],
        imgSrc:
          "https://st3.depositphotos.com/1001201/19093/i/450/depositphotos_190939760-stock-photo-push-to-reach-the-goals.jpg",
      },
      {
        id: 4,
        title: "Економ",
        labels: [require("@/assets/car.png"), require("@/assets/truck.png")],
        imgSrc:
          "https://cdn.vox-cdn.com/thumbor/l3kaxHqYUIGsOajFQKtNNLdTR64=/0x0:2121x1414/1200x800/filters:focal(892x538:1230x876)/cdn.vox-cdn.com/uploads/chorus_image/image/72687316/GettyImages_1253985588.0.jpg",
      },
    ],
    filter: "",
  },
  getters: {
		getFoods:(state) => state.foods,
		getSuppliers:(state) => state.suppliers
	},
  mutations: {},
  actions: {},
  modules: {},
});
