import {JsonController, Get, Post as HttpPost, Param, Delete, Body, QueryParam} from "routing-controllers";
import {Service} from "typedi";
import {PostRepository} from "../repository/PostRepository";
import {Post} from "../model/Post";

@Service()
@JsonController()   
export class PostController {

    constructor(private postRepository: PostRepository) {
    }

    @Get("/posts")
    all(): Promise<Post[]> {
        return this.postRepository.findAll();   
    }

    @Get("/posts/:id")
    one1(@Param("id") id: number): Post {
        return this.postRepository.findOne(id);
    }



    @Get("/posts1/:id")
    one(@Param("id") id: number,@QueryParam('id') queryParam: String): any {
        return {name : queryParam}
    }



    @HttpPost("/posts")
    post(@Body() post: Post): Post {
        return this.postRepository.save(post);
    }

    @Delete("/posts/:id")
    delete(@Param("id") id: number): Post {
        return this.postRepository.remove(id);
    }

}