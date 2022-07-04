import { Component, OnInit } from '@angular/core';
import { AkService } from '../ak.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  aWork: any;
  songs: any;
  dateOfR: any;
  artistss: any;
  rates: any;

  id = {
    _id: '',
    aWork: '',
    songs: '',
    dateOfR: '',
    artistss: '',
    rates: ''
  };

  checkAdd = false;
  checkEdit = false;
  checkAdd1 = false;

  userObj = {
    artWork: '',
    song: '',
    dor: '',
    artists: '',
    rate: '',
  };
  crud: any;
  down: any = false;
  up: any = true;
  constructor(private user: AkService) {
  }
  addNewelement() {
    this.checkAdd = true;
  }
  add() {
    console.log(this.aWork);
    this.userObj.artWork = this.aWork
    this.userObj.song = this.songs
    this.userObj.dor = this.dateOfR
    this.userObj.artists = this.artistss
    this.userObj.rate = this.rates


    console.log(this.userObj);

    this.user.addsong(this.userObj).subscribe(data => {
      console.log(data);
    })
    location.reload();
  }
  addNewArtists() {

  }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs() {
    this.user.getSongs().subscribe(data => {
      console.log("Hi");

      console.log(data);

    })
  }

}
