import User from "../models/users";
import { Request, Response } from "express";


const createUser = async (req: Request, res: Response) => {
    
    let user = await User.findOne({
        email: req.body.email
    })
    if(user) {
         res.status(400).send('User already registered');
    }
else{
         user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    }
        try {
            const result=  await user.save();
             res.send(result);
           } catch (error) {
             console.log(error);
             res.status(400).send((error as Error).message);
           }
}

export {createUser}