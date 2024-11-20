import User from "../models/users";
import { Request, Response } from "express";
import _ from "lodash";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response) => {
    
    let user = await User.findOne({
        email: req.body.email
    })
    if(user) {
         res.status(400).send('User already registered');
    }
else{
         user = new User(_.pick(req.body, ["name", "email","password"]));
         const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
        try {
             await user.save();
             res.send(_.pick(user, ["_id", "name", "email"]));
           } catch (error) {
             console.log(error);
             res.status(400).send((error as Error).message);
           }
}

export {createUser}