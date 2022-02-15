const app = Vue.createApp({
  data() {
    return {
      friends: [{ id: "manuel", name: "Manuel Lorenz" }],
    };
  },
});

app.mount("#app");
