require('dotenv').config()
const express = require('express')

const app = express()

const githubdata = {
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login',(req, res) =>{
    res.send('<h1>Namaste Baabu!</h>')
})
app.get('/dashboard',(req, res) =>{
    res.send('<h1>Guddi naa kodakaa!!</h1><h2>Poraaa bayatiki</h2>')
})
app.get('/github',(req, res) =>{
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})