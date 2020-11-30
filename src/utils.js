const fs = require("fs")
const path = require("path")
const tempPath = "/storage"

exports.createTempPath = () => {
  return fs.mkdirSync(tempPath, { recursive: true })
}

exports.getTempPath = name => {
  return path.join(tempPath, name)
}
