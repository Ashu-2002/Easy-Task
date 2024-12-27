import { Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Using Input decorator
  // @Input({required:true}) avatar !: string;
  // @Input({required:true}) name !: string;
  // @Input({required:true}) user !: {
    //   id: string;
    //   avatar: string;
    //   name: string;
    // }
  
  // Using Output decorator
  // @Output() select = new EventEmitter<string>();
  
 

  // Using signal inputs
  user = input.required<User>();
  selected = input.required<Boolean>();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);
 
 
  select = output<string>();

  
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser(){
    console.log("user selected: " + this.user().id);
    this.select.emit(this.user().id);
  }
}
