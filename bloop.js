var fs = require('fs')
// const get = require('../helper/function')
const arr = ["tes","tes2","tes3"]


function test(arr) {
    return "const datasetEmail = ['" + arr[0] + "','" + arr[1] + "','" + arr[2] + "']"+"\n"+
            "module.exports = {datasetEmail};"
}

fs.writeFile('./datapolis.js', test(arr), function (err) {
  if (err) throw err;
});
