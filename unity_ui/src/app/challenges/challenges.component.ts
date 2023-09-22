import { Component } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent {
  challenges: Array<{ title: string, description: string, rules: Array<string>, points: number }> = [
    {
      title: 'Challenge 1',
      description: 'Challenge 1 info lala la la la ',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      points: 100
    },
    {
      title: 'Challenge 2',
      description: 'here is the Info for the challenge 2',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      points: 200
    },
    {
      title: 'Challenge 3',
      description: 'la la la la la.',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      points: 150
    }
  ];

  selectChallenge(challenge: { title: string, points: number }): void {
    // Code to handle user selecting a challenge and updating their progress
  }
}
