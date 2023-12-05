import {Component, EventEmitter, Input} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {IPost} from "../../interfaces/post.interface";
import {PostsComponent} from "../posts/posts.component";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        PostsComponent,
        NgIf
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})

export class UserComponent {
    @Input()
    user: IUser

    userId:number;


    ngOnInit(): void {
    }
    getPosts():void {
        this.userId = this.user.id
    }

}
