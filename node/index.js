const express = require('express')

const app = express();

app.get('/', (req,res) => {
  res.send('Hi Prague, there again') 
});

<<<<<<< HEAD
/* open a server new */
=======
app.get('/health', (req,res)) => {
  res.send('health check') 
}
>>>>>>> 70e8f113f1efcc23fc914851f3c4dc8fc33cbe23
app.listen(8080, () => {
  console.log("Listening on port 8080")
})
