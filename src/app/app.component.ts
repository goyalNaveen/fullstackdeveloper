import { Component } from '@angular/core';
import {TribeDataService} from './tribe-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  testFlag: boolean =false;
  color= ["red","green","yellow"];
  colorName="asw";
  public teams= [];
  public errorMsg;
  constructor(private tribeDataService: TribeDataService) {
    this.tribeDataService.getData().subscribe(arg => this.teams = arg,
                                              error => this.errorMsg = error);

  }

}
