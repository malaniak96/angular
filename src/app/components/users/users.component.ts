import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {UserComponent} from "../user/user.component";
import {NgForOf} from "@angular/common";
import {PostComponent} from "../post/post.component";
import {PostsComponent} from "../posts/posts.component";
import {IPost} from "../../interfaces/post.interface";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        UserComponent,
        NgForOf,
        PostComponent,
        PostsComponent
    ],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
    users: IUser[]
    userPosts: IPost

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getAll().subscribe(value => this.users = value)
    }


}
