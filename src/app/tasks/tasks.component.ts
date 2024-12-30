import { Component, input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTask } from "./new-task/new-task.component";
import { NewTaskData } from "./task/task.model";
import { TasksService } from "./tasks.service";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTask],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent{
    userId = input.required<string>();
    name = input.required<string>();
    newTaskTab = false;

    private tasksService: TasksService;
    constructor(taskService: TasksService){
      this.tasksService = taskService;
    }

    // Shorthand for creating tasksService instance
    // constructor(private tasksService: TasksService){}

    get SelectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId());
    }

    toggleAddTaskTab(){
      this.newTaskTab = !this.newTaskTab;
    }

    onNewTaskSubmit(newTask: NewTaskData){
      this.tasksService.addTask(newTask, this.userId());

      this.toggleAddTaskTab();
    }
}