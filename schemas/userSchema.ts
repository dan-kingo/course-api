import {z} from 'zod';

const userScehma =  z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters long'}).max(50,{message: 'Name must be at most 50 characters long'}),
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 8 characters long'}).max(1024),
})

export default userScehma;