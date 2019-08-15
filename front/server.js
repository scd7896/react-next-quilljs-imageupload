const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const axios = require('axios')
const handle = app.getRequestHandler()

app.prepare().then(()=>{
    const server = express()
    server.use(express.json())
    server.get('/posts/:id', (req,res)=>{
        return app.render(req, res, '/posts',{id: req.params.id})
            
    })
    server.get('*',(req, res)=>{
        return handle(req,res);
    })
    server.listen(3011,()=>{
        console.log('프론트 서버는 3011')
    })
})