// src/domain/services/UserService.ts

import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(user: User): Promise<User> {
        const existingUser = await this.userRepository.getByEmail(user.email);
        if (existingUser) {
            throw new Error('User already exists with that email address');
        }
        return this.userRepository.create(user);
    }

    async getUserById(id: string): Promise<User | null> {
        return this.userRepository.getById(id);
    }
}