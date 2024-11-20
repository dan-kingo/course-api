import {z} from "zod";

const authorSchema = z.object({
name: z.string().min(5, "name must be at least 5 characters long!"),
bio: z.string().min(5, "bio must be at least 5 characters long!"),
website: z.string().url(),
})

export default authorSchema