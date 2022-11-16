module.exports = {
  transpileDependencies: ["vuetify", "vue-tel-input-vuetify"],
  devServer: {
    host: "localhost",
    https: false,
    disableHostCheck: true,
    port: 8080,
    public: "0.0.0.0:8080",
  },
  publicPath: "/Bayanatech/dist",
};
