require("dotenv").config()

const env = [
  "API_URL",
  "PORT",
  "NODE_ENV",
]

function buildEnvConfig(acc, cur) {
  return { ...acc, [`process.env.${cur}`]: process.env[cur] }
}

module.exports = env.reduce(buildEnvConfig, {})