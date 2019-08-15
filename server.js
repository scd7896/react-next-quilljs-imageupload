const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const path = require('path')
const http = require('http').createServer(app)
const multer = require('multer')
const upload = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname)
            const basename = path.basename(file.originalname, ext)
            done(null, basename+new Date().valueOf()+ext)
        }
    })
})
const connection = mysql.createConnection({
    host : 'quilljstest.c3kkdxpfurdg.ap-northeast-2.rds.amazonaws.com',
    user : 'scd7896',
    password : 'rlatjqj1423',
    port : 3306,
    database : 'quilltest'
})
connection.connect();
app.use(cors({
    origin : true,
    credentials: true
}))
app.use(express.json({
    limit : '100mb'
}))
app.use('/',express.static('uploads'))
app.use(express.json())

app.post('/api/posts', (req, res)=>{
    
    const title = req.body.title
    const content = req.body.content
    const sql = `INSERT INTO posts VALUES(null,'${content}','${title}')`
    const params =[];
    connection.query(sql,params,
        (err,rows, fileds)=>{
            console.error(err)
            res.send(rows)
        })
})

app.post('/api/image', upload.single('image'),(req,res)=>{
    console.log(req)
    res.json(req.file.filename)
})

app.get('/api/posts/:id', (req,res)=>{
    const sql = `SELECT content, title FROM posts WHERE id =${req.params.id}`
    const params = []
    connection.query(sql, params, (err, rows, fields)=>{
        console.log
        res.send(
            `
            <!DOCTYPE HTML>
            <html>
                <body>
                    ${rows[0].content}
                </body>
            </html>

            `
        )
    })
})

app.get('/api/test', (req, res)=>{
    res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
            </head>
            <body>
                하히후헤호
            </body>
        </html>
    `)
})



http.listen(3060, ()=>console.log('3060 실행중'))