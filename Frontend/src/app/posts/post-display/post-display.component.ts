import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostServiceService } from '../post-service.service';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  posts:{_id:string, title:string, description:string, departmentCode: string, username: string, __v: string}[] = []

  constructor(public postService: PostServiceService, public auth: AuthServiceService) {}

  private postsubscription!: Subscription

  
ngOnInit() {
  this.postService.getpost_service()
  this.postsubscription = this.postService.getUpdateListener()
  .subscribe((posts:{_id:string, title:string, description:string, departmentCode: string, username: string, __v: string}[])=>
  {
    this.posts = posts
  })
}

ngOnDestroy()
{
  this.postsubscription.unsubscribe()
}

}
