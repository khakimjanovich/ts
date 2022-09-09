// @ts-ignore
import * as express from 'express';
import {Post} from './post.interface'

export class PostsController {
    public path = '/posts';
    public router = express.Router()

    private posts: Post[] = [
        {
            author: 'Marcin',
            content: 'Dolor sit amet',
            title: 'Lorem ipsum',
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.posts)
    }

    createAPost = (request: express.Request, response: express.Response) => {
        const post: Post = request.body;
        this.posts.push(post);
        response.send(post);
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path,this.createAPost);
    }
}
