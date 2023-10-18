export default {
  type: "admin",
  routes: [
    {
      method: "GET",
      path: "/find",
      handler: "todo.find",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
