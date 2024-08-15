// src/infrastructure/express/controllers/UserController.ts

import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../usecases/createUser/CreateUserUseCase';
import { User } from '../../../domain/models/User';

export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) { }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { id, name, email, password } = req.body;
            const user = await this.createUserUseCase.execute({ id, name, email, password });
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating user' });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await this.createUserUseCase.execute(id);
            if (!user) {
                res.status(404).json({ message: `User with ID ${id} not found` });
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error getting user' });
        }
    }
}