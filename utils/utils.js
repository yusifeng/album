
let fs = require('fs')
let path = require('path')


/**
 * 获取所给目录下所有的文件夹
 * @param {string} folder
 */
exports.getDirectoryeNames = function (folder) {
  let dir = path.resolve(__dirname, folder)
  let arr = fs.readdirSync(dir)

  let arr1 = arr.filter((item) => {
    let isDirectory = fs.statSync(`${dir}/${item}`).isDirectory()
    return isDirectory
  })
  return arr1
}

exports.getFilesNames = function (folder) {
  let dir = path.resolve(__dirname, folder)
  let arr = fs.readdirSync(dir)

  let arr1 = arr.filter((item) => {
    let isDirectory = fs.statSync(`${dir}/${item}`).isDirectory()
    return !isDirectory
  })
  return arr1
}

exports.isInArray =  function(item, arr) {
  let i = arr.filter(single => {
    return single === item
  })
  return !!i.length
}



