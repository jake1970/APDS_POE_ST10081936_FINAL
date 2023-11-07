import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthServiceService } from '../auth/auth-service.service';
import { Subject } from 'rxjs';
import { Int32 } from 'mongodb';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {



private postsdisplay: { _id: string, title: string, description: string, departmentCode: string, username: string, __v: string }[] = [];
private updatedpostsdisplay = new Subject<{ _id: string, title: string, description: string, departmentCode: string,  username: string, __v: string }[]>();



constructor(private http: HttpClient, public auth: AuthServiceService) { }


  
addpost_service(ptitle: string, pdescription: string, pdepartmentcode: string )
{
  this.http.post<{message:string, post:any}>('https://localhost:3000/api/posts', {title:ptitle, description:pdescription, departmentCode:pdepartmentcode, username: this.auth.getStoredUsername()})
  .subscribe((thepost)=>
  {
this.postsdisplay.push(thepost.post)
this.updatedpostsdisplay.next([...this.postsdisplay])
  })
}



getpost_service() {
  this.http.get<{ message: string, posts: any[] }>('https://localhost:3000/api/posts')
    .subscribe((thepost) => {

      if (Array.isArray(thepost)) {
      this.postsdisplay = thepost; 
      this.updatedpostsdisplay.next([...this.postsdisplay]);
      }
      else
      {
        console.error('Input is not an array');
      }
    });
}




deletepost_service(postid: string)
{
  this.http.delete('https://localhost:3000/api/posts/' + postid)
  .subscribe(()=>
  {
    const updatedpostsdeleted = this.postsdisplay.filter(post => post._id!==postid)
    this.postsdisplay = updatedpostsdeleted
    this.updatedpostsdisplay.next([...this.postsdisplay])
  })
}

getUpdateListener()
{
  return this.updatedpostsdisplay.asObservable()
}


}
