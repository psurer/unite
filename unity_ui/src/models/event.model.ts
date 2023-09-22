export interface EventModel {
     id: number;
     name: string;
     subtitle: string,
     description: string;
     date: string;
     imagePath: string; // adding a pic 
     category: string;
     points: number; // this is the number of points a user will get for attending the event
}
