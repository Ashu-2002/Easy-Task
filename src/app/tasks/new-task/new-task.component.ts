import { Component, input, output, signal } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { NewTaskData } from "../task/task.model";

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTask{
    cancel = output<void>();
    add = output<NewTaskData>();

    enteredTitle = signal('');
    enteredSummary = signal('');
    enteredDate = signal('');

    onAddTaskClick(){
        console.log("Add Task Clicked! ");
    }

    onCancelClick(){
        this.cancel.emit();
    }

    onSubmit(){
        this.add.emit({
            title: this.enteredTitle(),
            summary: this.enteredSummary(),
            dueDate: this.enteredDate(),
        });
    }
}