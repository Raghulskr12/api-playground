import express from 'express';

const app = express();

app.get('/',(req,res)=>
{
    res.send('welcome to the subscription tracker api!');
}
)


app.listen(3000, 'localhost', ()=>{
    console.log('server running port 3000');
});
export default app;