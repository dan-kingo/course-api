import {z} from 'zod';

const userScehma =  z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters long'}).max(50,{message: 'Name must be at most 50 characters long'}),
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string()
    .min(6, {message: 'Password must be at least 8 characters long'})
    .max(1024)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'})
})

export default userScehma;