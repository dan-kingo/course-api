import{Request, Response} from 'express';
import User from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

const authenticate = async (req: Request, res: Response) => {
const user = await User.findOne({email:req.body.email});

if(!user) {
res.status(400).json({message: 'Invalid email or password'});
}

const validPassword = await bcrypt.compare(req.body.password, user.password);

if(!validPassword) {
res.status(400).json({message: 'Invalid email or password'});
}else{

    const token = jwt.sign({_id: user._id}, config.get('jwtKey'))
    res.send(token);
}

}

export default authenticate