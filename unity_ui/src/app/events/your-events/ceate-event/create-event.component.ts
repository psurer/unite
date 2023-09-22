import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventModel } from '../../../../models/event.model';
import { EventService } from '../../../../services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateEventComponent>,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      imagePath: [''],
      category: [''],
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const newEvent: EventModel = {
        id: this.eventService.getUniqueId(),
        // id: Math.floor(Math.random() * 1000),
        name: this.eventForm.value.name,
        subtitle: this.eventForm.value.subtitle,
        description: this.eventForm.value.description,
        date: this.eventForm.value.date,
        imagePath: this.eventForm.value.imagePath,
        category: this.eventForm.value.category,
        points: this.eventForm.value.points,
      };
      this.eventService.addEvent(newEvent).subscribe(
        (response) => {
        console.log('New event added to the backend:', response);
        this.dialogRef.close(newEvent);
      },
      (error)=> {
        console.error('Error adding new event:',error);
      }
      );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
// import { UnityEventModel } from '../../../../models/event.model';

// @Component({
//   selector: 'app-create-event',
//   templateUrl: './create-event.component.html',
//   styleUrls: ['./create-event.component.scss']
// })
// export class CreateEventComponent implements OnInit {

//   eventForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private dialogRef: MatDialogRef<CreateEventComponent>
//   ) { }

//   ngOnInit(): void {
//     this.eventForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       subtitle: ['', Validators.required],
//       description: ['', Validators.required],
//       date: ['', Validators.required],
//       imagePath: ['']
//     });
//   }

//   onSubmit() {
//     if (this.eventForm.valid) {
//       const newEvent: UnityEventModel = {
//         id: Math.floor(Math.random() * 1000),
//         name: this.eventForm.value.name,
//         subtitle: this.eventForm.value.subtitle,
//         description: this.eventForm.value.description,
//         date: this.eventForm.value.date,
//         imagePath: this.eventForm.value.imagePath
//       };
//       this.dialogRef.close(newEvent);
//     }
//   }

//   onCancel() {
//     this.dialogRef.close();
//   }

// }
// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { UnityEventModel } from 'src/models/event.model';
// // import './create-event.component.scss';

// // @Component({
// //   selector: 'app-create-event',
// //   templateUrl: './create-event.component.html',
// //   styleUrls: ['./create-event.component.scss']
// // })
// // export class CreatEventComponent {
// //   name: string = '';
// //   subtitle: string = '';
// //   date: string = '';
// //   description: string = '';
// //   imagePath: string = '';

// //   constructor(private router: Router) { }

// //   createEvent(): void {
// //     // here, we can use a service to create a new event with the properties collected from the form
// //     // and then navigate the user to the newly created event page, but we should probably display the dashboard instead
// //     this.router.navigate(['/event-detail']);
// //   }
// // }
