// src/usecases/createUser/CreateUserOutput.ts

import { User } from '../../domain/models/User';

export interface CreateUserOutput {
    user: User;
}