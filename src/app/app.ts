import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './component/login/login';
import { Grade } from './component/login/grade/grade/grade';
import { Gmail } from "./component/gmail/gmail/gmail";
import { Perents } from "./component/energy/perents/perents";
import { Form } from "./component/form/form/form";
import { Discount } from "../app/discount/discount";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Grade,Gmail,Perents,Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('our-project');
}
