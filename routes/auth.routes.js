import {Router} from 'express';

const authrouter=Router();

authrouter.post('/sign-up',(req,res)=>res.send({message:'sign up route'}));
authrouter.post('/sign-in',(req,res)=>res.send({message:'sign in route'}));
authrouter.post('/sign-out',(req,res)=>res.send({message:'sign out route'}));

export default authrouter;