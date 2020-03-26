
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  apiUrl: process.env.API_URL || 'https://covid19.mathdro.id/api',
}

module.exports = { config }