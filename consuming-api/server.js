const cors = require('cors')
const express = require('express')
const app = express()
const port = 4567
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) =>{ 

  try {
     //response é a resposta do axios mas eu tiro o data de dentro do response
     const { data } = await axios('https://jsonplaceholder.typicode.com/users')
     console.log(data)
     return res.json(data)
     
    
  } catch (error) {
    console.error(error)
  }
   
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))