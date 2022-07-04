import { Component } from '@angular/core';
import { AkService } from './ak.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'add';

  constructor(private user: AkService) {

  }




}
