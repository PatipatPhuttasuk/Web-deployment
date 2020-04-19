let express = require('express')
let app = express()

app.get('/', (req, res) => {
    console.log('Web deployment')
    res.send({

        Checkpoint: '9.1',
        ID: 5835512104,
        Name: 'Patipat',
        Surname: 'Phuttasuk',
        Sec: 01
    })
})

app.get('/crash', (req, res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit
})

app.listen(process.env.PORT,
     () => console.log('Server is running at ' , process.env.PORT))
