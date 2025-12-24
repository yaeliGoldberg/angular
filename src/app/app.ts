import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './component/login/login';
import { Grade } from './component/login/grade/grade/grade';
import { Gmail } from "./component/gmail/gmail/gmail";
import { Perents } from "./component/energy/perents/perents";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Grade,Gmail,Perents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('our-project');
}
