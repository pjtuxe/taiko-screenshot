const _config = require("./config")
const _utils = require("./utils")
const config = _config.getConfig()
const { openBrowser, goto, screenshot, closeBrowser } = require("taiko");

// Validate the given configuration against static rules
const { url, name, fullPage, encoding } = _config.validateConfig(config)

// Init the application
_utils.createTempPath()

var loop = true;

(async () => {
  try {
    // Open up a simulated browser
    await openBrowser({ headless: true, args: ["--no-sandbox"] })
    // Navigate to the site
    await goto(url)
    // Take the screenshot
    await screenshot({ path: _utils.getTempPath(name), fullPage, encoding })
    // Close the virtual browser
    await closeBrowser()
  } catch (e) {
    console.error(e)
  } finally {
    loop = false
  }
})();

require('deasync').loopWhile(() => { return loop })
