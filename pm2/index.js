let express = require('express')
let app = express()

app.get('/', (req, res) => {
    console.log('Hello world')
    res.send('Hello world')
})

app.get('/crash', (req, res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit
})

app.listen(process.env.PORT,
     () => console.log('Server is running at ' , process.env.PORT))