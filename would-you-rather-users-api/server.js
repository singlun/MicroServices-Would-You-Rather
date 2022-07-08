import { getUsers }  from './src/api';
import  express  from 'express';

const app = express()
const port = 4000

//CORS Should be restricted
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/users', async (_req, res) => {
    const users = await getUsers();
    res.send(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})