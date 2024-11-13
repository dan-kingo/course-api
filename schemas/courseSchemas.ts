import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "name must be at least 3 characters long!"),
});

export default schema;
