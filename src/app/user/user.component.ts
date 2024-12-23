import { Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar !: string;
  // @Input({required:true}) name !: string;
  // @Output() select = new EventEmitter<string>();
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());
  select = output<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser(){
    console.log("user selected: " + this.id());
    this.select.emit(this.id());
  }
}
