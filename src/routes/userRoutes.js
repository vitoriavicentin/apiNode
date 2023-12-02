const express = require("express");
const router = express.Router();
const userModel = require("../models/userModels");

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Get a list of all users in the system
 *     responses:
 *       200:
 *         description: Success, returns the list of users
 *       500:
 *         description: Internal server error
 */
router.get("/", async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Get a list of all users in the system
 *     responses:
 *       200:
 *         description: Success, returns the list of users
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Add a new user
 *     description: Add a new user to the system
 *     requestBody:
 *       description: User object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: varchar
 *     responses:
 *       201:
 *         description: User added successfully
 *       400:
 *         description: Bad request, missing required fields
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email and password are mandatory" });
  }

  try {
    const newUser = await userModel.addUser(name, email, password);
    const userResponse = { name: newUser.name, email: newUser.email };
    const responseMessage = `User added successfully. Email: ${newUser.email}, Name: ${newUser.name}`;
    res.status(201).json({ message: responseMessage, user: userResponse });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
