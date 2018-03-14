let utils = require('../utils/utils.js')


/**
 * 相册分类页面
 * @param {*} req 
 * @param {*} res 
 */
exports.showIndex = function(req, res) {
  let albums = utils.getDirectoryeNames('../album')
  res.render('index', {
    albums
  })
}


/**
 * 相册详情页面
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.showAlbum = function (req, res, next) {
  let albums = utils.getDirectoryeNames('../album')
  let picArray = utils.getFilesNames(`../album/${req.params.albumName}`)
  if (!utils.isInArray(req.params.albumName, albums)) {
    console.log(1)
    next()
    return
  }
  res.render('album', {
    albumName: req.params.albumName,
    albums: picArray
  })
}


/**
 * 404页面
 * @param {*} req 
 * @param {*} res 
 */
exports.error = function(req, res) {
  res.render('404')
}