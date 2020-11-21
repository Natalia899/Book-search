const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/subject/:some', function (req, res) {
    let bookGenre = req.params.some
    urllib.request(`https://www.googleapis.com/books/v1/volumes?q=${bookGenre}`, function (err, response) {
        data = JSON.parse(response.toString())
        let booksList = data.items.map (book => {
            return {
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors[0],
                description: book.volumeInfo.description,
                img: book.volumeInfo.imageLinks.smallThumbnail
            }
        }) 
        res.send(booksList)
    })
})


const port = 3005
app.listen(port, function () {
    console.log(`Server is up and running smoothly`)
})
