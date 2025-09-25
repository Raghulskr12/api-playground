import express from 'express';
import { PORT } from './config/env.js';
import authrouter from './routes/auth.routes.js';
import subscriptionrouter from './routes/subscription.routes.js.js';
import userrouter from './routes/user.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authrouter);
app.use('/api/v1/subscriptions', subscriptionrouter);
app.use('/api/v1/users', userrouter); 

app.get('/',(req,res)=>
{
    res.send('welcome to the subscription tracker api!');
}
)


app.listen(PORT, 'localhost', async()=>{
    console.log(`server running port localhost ${PORT}`);

    await connectToDatabase();
});
export default app;