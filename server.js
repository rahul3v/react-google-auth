const express = require('express')
const app = express()
const port = 3001

app.get('/api', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  let restData= [
     {img:'https://www.newidea.com.au/media/67740/mickey-main.jpg', shortDis:'Hello this is a new message for you', Likes:'25', comments:'23'},
     {img:'https://www.newidea.com.au/media/67740/mickey-main.jpg', shortDis:'Hello this 2',Likes:'255', comments:'2'},
     {img:'https://www.newidea.com.au/media/67740/mickey-main.jpg', shortDis:'Hello this 3',Likes:'215', comments:'3'},
  ];

  res.send(restData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})