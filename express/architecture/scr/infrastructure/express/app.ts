// src/infrastructure/express/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controllers/UserController';
import { CreateUserUseCase } from '../../usecases/createUser/CreateUserUseCase';
import { UserService } from '../../domain/services/UserService';
import { UserRepositoryImpl } from '../../infrastructure/persistence/UserRepositoryImpl';
import { Sequelize } from 'sequelize';

export function createApp(database: Sequelize) {
    const app = express();

    const userRepository = new UserRepositoryImpl(database);
    const userService = new UserService(userRepository);
    const createUserUseCase = new CreateUserUseCase(userService);
    const userController = new UserController(createUserUseCase);

    app.use(bodyParser.json());

    app.post('/users', userController.createUser.bind(userController));
    app.get('/users/:id', userController.getUserById.bind(userController));

    return app;
}