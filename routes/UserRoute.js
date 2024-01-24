import express from 'express';
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/usercontroller.js'

const userRouter = express.Router();

router.get('/users', getUsers);
router.get('/users/:id',getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default userRouter;