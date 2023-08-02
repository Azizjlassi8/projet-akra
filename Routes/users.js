// 1 require express
const express = require("express");;
const User = require("../models/User");


// route 
const router = express.Router();

/// Routes

// test route
router.get("/test", (req, res) => {
    res.send("Hello world");
});

// add contact
router.post("/add", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newUser = new User({ name, email, phone});
        await newUser.save();
        res.status(200).send({ msg: "User add successfully ...", newUser });
    } catch (error) {
        res.status(400).send({ msg: "Can not add User!!!", error });
    }
});

// get all user
router.get("/all", async (req, res) => {
    try {
        const listUsers = await User.find();
        res
            .status(200)
            .send({ msg: "This is the list of all users ...", listUsers });
    } catch (error) {
        res.status(400).send({ msg: "Can not get !!!", error });
    }
});

// get one user
router.get("/:id", async (req, res) => {
    try {
        const userToGet = await Contact.findOne({_id: req.params.id });
        res.status(200).send({ msg: "I get the user ...", userToGet });
    } catch (error) {
        res
            .status(400)
            .send({ msg: "Can not get user with this id !!!", error});
    }
});

// delete user
router.delete("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await User.findOneAndDelete({ _id });
        res.status(200).send({ msg: "User deleted ..."});
    } catch (error) {
        res
            .status(400)
            .send({ msg: "Can not deleted User with this id !!!", error });
    }
});

// edit user
router.put("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await User.updateOne({ _id }, { $set: { ...req.body } });
        res.status(200).send({ msg: "User updated .." });
    } catch (error) {
        res
            .status(400)
            .send({ msg: "Can not update User with this id !!!", error });
    }
});

// export
module.exports = router;
