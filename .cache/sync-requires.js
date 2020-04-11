const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("E:\\Trabajos\\4 Ligas\\gatsby-wordpress\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("E:\\Trabajos\\4 Ligas\\gatsby-wordpress\\src\\pages\\index.js"))),
  "component---src-pages-tabla-posiciones-js": hot(preferDefault(require("E:\\Trabajos\\4 Ligas\\gatsby-wordpress\\src\\pages\\tabla-posiciones.js")))
}

