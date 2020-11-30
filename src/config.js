/**
 * @returns {Object}
 */
exports.getConfig = () => {
  const env = process.env
  return {
    url: env.TSS_URL,
    name: env.TSS_NAME || "screenshot.png",
    fullPage: env.TSS_FULL_PAGE !== undefined ? !!env.TSS_FULL_PAGE : true,
    encoding: env.TSS_ENCODING !== undefined ? env.TSS_ENCODING : null,
    wait: env.TSS_WAIT !== undefined ? parseFloat(env.TSS_WAIT) : null,
  }
}

/**
 * @param {Object} config
 * @returns {Object}
 * @throws Exception  When the given config is malformed.
 */
exports.validateConfig = config => {
  if (!config.url || !config.url.length) {
    throw "Missing environment variable: TSS_URL"
  }

  return config
}
