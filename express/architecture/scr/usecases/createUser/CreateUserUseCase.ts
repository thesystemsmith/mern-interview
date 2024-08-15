// src/usecases/createUser/CreateUserUseCase.ts

import { User } from '../../domain/models/User';
import { UserService } from '../../domain/services/UserService';
import { CreateUserInput } from './CreateUserInput';
import { CreateUserOutput } from './CreateUserOutput';

export class CreateUserUseCase {
    constructor(private readonly userService: UserService) { }

    async execute(input: CreateUserInput): Promise<CreateUserOutput> {
        const user: User = {
            id: '',
            name: input.name,
            email: input.email,
            password: input.password,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const createdUser = await this.userService.createUser(user);
        return { user: createdUser };
    }
}