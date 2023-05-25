import { Component } from '@angular/core';
import { HEROES } from '../../constants';
import { Hero } from '../../types';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes: Hero[] = HEROES;
}
