import { Router } from "express";

const userrouter = Router();

userrouter.get("/", (req, res) =>
{
    res.send({ message: "get all users" });
});


userrouter.get("/:id", (req, res) =>
{
    res.send({ message: "get user details" });
});


userrouter.post("/", (req, res) =>
{
    res.send({ message: "create a new user" });
});


userrouter.put("/:id", (req, res) =>
{
    res.send({ message: "update user" });
});


userrouter.delete("/:id", (req, res) =>
{
    res.send({ message: "delete user" });
});


export default userrouter; 