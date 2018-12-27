import { User } from '../model/User'
import { Mongo } from '../dbConnection'

class AsyncConstructorHelper {
    public static CreateAsync = async () => {
        const userRepo = new UserRepository();

        userRepo.db = await userRepo.mongo.connectToServer()

        return userRepo;
    };
}



export class UserRepository {
    users: User[] = [new User('leeya', 12), new User('fuma'), new User('matia'), new User('dana')]
    mongo = new Mongo()
    db: any = null


    constructor() {
        AsyncConstructorHelper.CreateAsync()

    }

    async findAll(): Promise<any> {
        let users = {}
        users = await this.db.collection('users').find({}).toArray()
        return users;
    }

    findOne(userId: number): User {
        return this.users[userId]
    }

    save(user: User): User {
        this.users.push(user)
        return user
    }


}