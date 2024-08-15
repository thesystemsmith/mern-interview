import { Op } from 'sequelize';
import { User } from '../../domain/models/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserModel } from './sequelize/models/UserModel';

export class UserRepositoryImpl implements UserRepository {
    async createUser(user: User): Promise<User> {
        const userModel = await UserModel.create(user);
        return {
            id: userModel.id,
            name: userModel.name,
            email: userModel.email,
            password: userModel.password,
        };
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const userModel = await UserModel.findOne({
            where: {
                email: {
                    [Op.eq]: email,
                },
            },
        });
        if (!userModel) {
            return null;
        }
        return {
            id: userModel.id,
            name: userModel.name,
            email: userModel.email,
            password: userModel.password,
        };
    }
}
