console.log("This app has been built on Vue");

// constant that contains the whole app
const app = {
  data() {
    return {
      title: "Vue3 Twitter App",
      item: "",
      items: [
        {
          id: 1,
          avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=John`,
          body: "hello Vue3",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 2,
          avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=Jane`,
          body: "this is VTwitter App",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.items.push({
        // Math.round(Math.random() * n)
        id: this.items.length + 1,
        avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Date.now()}`,
        body: this.item,
        date: new Date(Date.now()).toLocaleString(),
      });
      // reset
      this.item = "";
      // console.log(this.item);
    },
  },
};
// pass Vue not the whole app but constant 'cause it weights less
// then mount our app into div component with id 'app' in index
Vue.createApp(app).mount("#app");
