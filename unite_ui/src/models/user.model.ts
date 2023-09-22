export interface User {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  points: number;
  status: string;
  profilePic: string;
  activityLog: Activity[];
}

// export interface UserProfile {
//   userProfile: string; // edit to src | linked
// } 

export interface Activity {
  challenge: string;
  dateCompleted: Date;
  pointsEarned: number;
}

export interface UserProfile extends User {
  activityLog: Activity[];
}

/* UserProfile interface extends the User interface and adds an 
activityLog property that is an array of Activity objects
This interface can be used to represent a user profile object
 that contains both the user's basic information and their activity history.*/