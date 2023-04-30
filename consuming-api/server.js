const cors = require('cors')
const express = require('express')
const app = express()
const port = 4567

app.use(cors())

app.get('/', (req, res) =>{ return res.json(
  [ { name: 'mauricio'},
  { name: 'maria'}

  ])
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))