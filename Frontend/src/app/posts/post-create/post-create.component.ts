import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

constructor(public postservice: PostServiceService) { }


onaddpost(postform: NgForm)
{
  if (postform.invalid)
  {
alert('Invalid')
return
  }
  
  this.postservice.addpost_service(postform.value.title, postform.value.description, postform.value.departmentcode)
  postform.resetForm()
  alert("Added Post")
  
}

}
