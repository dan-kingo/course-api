import {Request, Response} from "express";
import Author from "../models/author";

const createAuthor = async (req: Request, res: Response) => {
  const author = new Author({
    name: req.body.name,
    bio: req.body.bio,
    website: req.body.website,
  });
  try {
   const result=  await author.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send((error as Error).message);
  }
};

const getAuthors = async (_req: Request, res: Response) => {
try{
  const authors = await Author.find();
  res.json(authors);
}  catch(err){
  res.status(400).send((err as Error).message);
}
};

export {createAuthor, getAuthors}