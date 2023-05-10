import { Request, Response } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users");
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
  return res.status(500).json({
    message: "Internal Server Error",
  });
};

// @desc    Get a user2
// @route   GET /api/v1/users/:id
// @access  Public
const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const response: QueryResult = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
  return res.status(500).json({ message: "Internal Server Error" });
};

// @desc    Create a user
// @route   POST /api/v1/users
// @access  Public
const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email } = req.body;
    const response: QueryResult = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email]
    );
    return res.status(200).json({
      message: "User created Successfully",
      body: {
        user: {
          name,
          email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  return res.status(500).json({ message: "Internal Server Error" });
};

// @desc    Update a user
// @route   PUT /api/v1/users/:id
// @access  Public
const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const response: QueryResult = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      [name, email, id]
    );
    return res.status(200).json({
      message: "User updated Successfully",
      body: {
        user: {
          name,
          email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  return res.status(500).json({ message: "Internal Server Error" });
};

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const response: QueryResult = await pool.query(
      "DELETE FROM users WHERE id = $1",
      [id]
    );
    return res.status(200).json({
      message: "User deleted Successfully",
      body: {
        user: {
          id,
        },
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  return res.status(500).json({ message: "Internal Server Error" });
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
