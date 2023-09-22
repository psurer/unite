import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // allows us to send HTTP request
// import { map } from 'rxjs/operators'; // allows us to get data + return new data which is re-wrapped into an Observable so we can subscribe to it
// import { Post } from '../../post.model';
// import { EventCardItemComponent } from '../event-dashboard/event-card-item/event-card-item.component';
// import { EventModel } from '../../../models/event.model';
// import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent implements OnInit {
    // loadedPosts = [];

    constructor(private http: HttpClient) {}
  
    ngOnInit() {

    }}

    // //   this.fetchPosts();
    // }
  /* Below we send http request
        our post takes a couple of parameteres, 
        the url we will send the request to , we are using the firebase 
        then we will have a node, a folder so to say, that we will name posts 
        and we must add .json, this is a FIREBASE requirement
        we also need a request body, and we can add two min or more arguements
        when interacting with a RESTful API we normall send JSON data 
        angular will take our JS object and convert it to JSON data for us 
        */
    // onCreatePost(postData: Post) {
    /*post returns an observable that wraps our request
    we must call subscribe to get access to our reponse
    it will automatically atach the data to the response
    to the response body and give us that
    there are also others ways of accessing the reposne we will do later
   also note that subscribe is an observable provided by angular and 
   therefor we do not need to manage this subscription and unsubscribe
    */// Send Http request
//     this.http 
//     // optional but recommended , define the response data types here on these generic HTTP verbs
//       .post(
//         'https://unity-backend-b650d-default-rtdb.firebaseio.com/posts.json',
//         postData
//       )
//       .subscribe(responseData => {
//         console.log(responseData);
//       });
//       console.log(postData);
//   }

//     onFetchPosts() {
//     // Send Http request
//     // this.fetchPosts();
//   }

//     onClearPosts() {
//     // Send Http request
//   }
  /* get requests have no request body because you are not sending any data, instead we are requesting data
  // however we need to subcribe and we should get back our posts here
  // now we can call this from two diff places: OnFetchPosts and ngOnInit, so when the page loads and this app load we fetch
   and it will call our method and send this request
  */
     /* we manually loop through all the keys and create a new array
        // we then use a for in loop to go through all our keys in responseData which will be an object
        and then we will push each piece of data into our posts arrray 
        good practice is wrapping this with a if statement when we use for/in loop
        to check if response data has key as its own property so we do not access property of some rando prototype 
        */
//     private fetchPosts() {
//     this.http
//       .get<{ [key: string] : Post }>('https://unity-backend-b650d-default-rtdb.firebaseio.com/posts.json') // get method is a generic method and return the type which this response will return as the body once its done
//       .pipe( // below is our randomly generate id that holds post as a value
//         map(responseData: => {
//           const postsArray: Post[] = []; //now we return an array of Posts instead of object with cryptic key which holds our actual post
//           for (const key in responseData) {
//             if (responseData.hasOwnProperty(key)) {
//                 postsArray.push({ ...responseData[key], id: key });// we are pushing our nested JS object into our posts array
//             } // we use the spread operator to pull out all the key-value pairs of that nested object we are accessing here
//             // then we add a new key valeu pair to the post objects array, the ID field that acutally stores the key
//           },
//           return postsArray; // we return postsArray so this is now forwarded to our subscribe function
//         })
//       ).subscribe((posts) => {
//         console.log(posts);
//       });
//   }
// }

/* observable operators allow us to write cleaner code
we have diff steps we Funnel our data through that can be swapped or adjusted
so we wil have a learn subscribe function and have other steps that
before we subscribe we will call pipe
 focus on their parts respectively
*/