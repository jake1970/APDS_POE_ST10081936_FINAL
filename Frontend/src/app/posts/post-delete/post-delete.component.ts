import { Component, Input } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})

export class PostDeleteComponent {


  constructor(public postService: PostServiceService) {}

  @Input()
  inputpostid!: string;



  ngOnDelete(postid: string)
{
  if(confirm("Are you sure you want to delete this post")) {
    this.postService.deletepost_service(postid)
    alert("Post Deleted")
  }

}


}
