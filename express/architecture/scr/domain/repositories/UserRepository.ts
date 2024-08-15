// src/domain/models/User.ts

import { User } from '../models/User';

export interface UserRepository {
    create(user: User): Promise<User>;
    getById(id: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}