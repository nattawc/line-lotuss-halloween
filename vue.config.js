module.exports = {
  devServer: {
    open: process.platform === "darwin",
    host: "localhost",
    port: 3000, // CHANGE YOUR PORT HERE!
    https: true,
  },
};
