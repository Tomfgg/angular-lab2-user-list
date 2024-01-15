import { Component, Input } from '@angular/core';
// import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  @Input() userItem : any ;
}
