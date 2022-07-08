import { _getQuestions }  from './src/api';
import  express  from 'express';

const app = express()
const port = 4500

//CORS Should be restricted
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/questions', async (_req, res) => {
    const questions = await _getQuestions();
    res.send(questions);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})