import { Service } from "typedi";
import { JsonController, Get, Param, Post as HttpPost, Body } from "routing-controllers";
import { User } from '../model/User'
import bodyParser = require("body-parser");
import { UserRepository } from '../repository/UserRepository'
@Service()
@JsonController()

export class UsersController {

    constructor(private userRepository: UserRepository) {

    }

    @Get("/users/:id")
    getOneUser(@Param('id') userId: number): User {
        return this.userRepository.findOne(userId)
    }

    @Get('/users')
    async getAll(): Promise<any> {
        return await this.userRepository.findAll()

    }

    @HttpPost('/users')
    addUser(@Body() user: User): User {
        return this.userRepository.save(user)
    }



}