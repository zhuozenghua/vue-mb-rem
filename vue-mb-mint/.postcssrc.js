// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // "postcss-pxtorem": {
    //    "rootValue": 75,
    //    "propList": ['*','!font-size']
    // },
    "postcss-plugin-px2rem":{
        "rootValue": 75,
        "propBlackList":['font-size'],
         exclude: /(node_module)/, 
    }
  }
}