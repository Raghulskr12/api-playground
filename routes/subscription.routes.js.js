import {Router} from 'express';

const subscriptionrouter=Router();


subscriptionrouter.get('/',(req,res)=>
{
    res.send('GET all subscriptions');
});

subscriptionrouter.get('/:id',(req,res)=>
{
    res.send('GET a unique subscription');
});


subscriptionrouter.post('/',(req,res)=>
{
    res.send('CREATE a new subscription');
});


subscriptionrouter.put('/',(req,res)=>
{
    res.send('UPDATE a subscription');
});

subscriptionrouter.delete('/',(req,res)=>
{
    res.send('DELETE a subscription');
});


subscriptionrouter.get('/user/:id',(req,res)=>
{
    res.send('GET all subscriptions for user');
});

subscriptionrouter.put('/:id/cancel',(req,res)=>
{
    res.send('CANCEL a subscription');
});

subscriptionrouter.get('/upcoming-renewals',(req,res)=>
{
    res.send('GET upcoming renewals');
});

export default subscriptionrouter;