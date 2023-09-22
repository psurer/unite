import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { LeaderboardUser } from 'src/models/leaderboard-user.model';
import { LeaderboardTeam } from 'src/models/leaderboard-team.model';

/* The component has two properties: topUsers and topTeams. 
These properties will hold the data about top users and
 teams that are fetched from their respective services. */
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  topUsers: LeaderboardUser[] = [];
  topTeams: LeaderboardTeam[] = [];

  /* here will are injecting two services: UserService and TeamService. 
  These services are used to fetch the data about top users and teams. */
  constructor(private userService: UserService, private teamService: TeamService) { }

  ngOnInit(): void {
    // Load top users and teams from their respective services
    this.userService.getTopUsers().subscribe((users: LeaderboardUser[]) => {
      this.topUsers = users;
    });
    this.teamService.getTopTeams().subscribe((teams: LeaderboardTeam[]) => {
      this.topTeams = teams;
    });
  }
}

/* *** This component implements the ngOnInit lifecycle hook, which is called when the component 
is initialized. 
Inside ngOnInit, the component loads top users and teams from their respective services by 
calling the getTopUsers and getTopTeams methods. These methods return an Observable that
 emits an array of objects that match the shape of LeaderboardUser and LeaderboardTeam 
interfaces. Once the data is returned from these services, it is assigned to the topUsers
and topTeams properties of the component.

Overall, this component provides a simple way to display the top users and teams on a leaderboard, using the data fetched from UserService and TeamService.*** */