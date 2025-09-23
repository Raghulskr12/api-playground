import express from 'express';
import { PORT } from './config/env.js';
import authrouter from './routes/auth.routes.js';
import subscriptionrouter from './routes/subscriotion.routes.js';
import userrouter from './routes/user.routes.js';

const app = express();

app.use('/api/v1/auth', authrouter);
app.use('/api/v1/subscriptions', subscriptionrouter);
app.use('/api/v1/users', userrouter); 

app.get('/',(req,res)=>
{
    res.send('welcome to the subscription tracker api!');
}
)


app.listen(PORT, 'localhost', ()=>{
    console.log(`server running port localhost ${PORT}`);
});
export default app;