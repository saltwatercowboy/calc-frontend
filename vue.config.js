import vue from '@vitejs/plugin-vue'

vue()

module.exports = {
    publicPath: process.env.NODE_ENV === "production" 
    ? "/calc-frontend/" 
    : "/"
  };