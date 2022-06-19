const TITLE = process.env.VUE_APP_TITLE || "Worldlet"

const TOKEN_NAME = "Authorization"

const ENV_NAME = process.env.VUE_APP_ENV || ""

const HOST = process.env.VUE_APP_HOST || process.env.VUE_APP_PROXY_HOST || ""

const BASE_API = process.env.VUE_APP_BASE_API

export { TITLE, TOKEN_NAME, ENV_NAME, HOST, BASE_API }
