module.exports = {
  '/api_': {
    target: 'https://sale.gotosiam.com',
    changeOrigin: true
  },
  '/web_socket': {
    target: 'ws://sale.gotosiam.com',
    ws: true,
    changeOrigin: true
  }
}
