let express = require('express')
let router = require('./router')

let app = express()

app.use(express.static('./public'))
app.set('view engine', 'ejs')

app.get('/', router.showIndex)

app.get('/:albumName', router.showAlbum)


app.use(router.error)


























app.listen(8080, () => {
  console.log('服务器已启动端口: 8080')
})