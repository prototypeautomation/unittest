var fs = require('fs')
const get = require('../helper/function')
const arr = get.dataset


function test(arr) {
    return "const datasetEmail = ['" + arr[0] + "','" + arr[1] + "','" + arr[2] + "']"+"\n"+
            "module.exports = {datasetEmail};"
}

fs.writeFile('../helper/datasetPolis.js', test(arr), function (err) {
  if (err) throw err;
});