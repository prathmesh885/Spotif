import { Component, OnInit } from '@angular/core';
import { AkService } from '../ak.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private user: AkService) {

  }

  ngOnInit(): void {
  }

}
