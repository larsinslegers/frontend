import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { PlankDataService } from '../plank-data.service';
import { Plank } from '../plank.model';

@Component({
  selector: 'app-plank',
  templateUrl: './plank.component.html',
  styleUrls: ['./plank.component.css']
})
export class PlankComponent implements OnInit {
  @Input() public plank: Plank;
  loggedInUser$ = this._authenticationService.user$;
  constructor(private _plankDataService: PlankDataService,  private _authenticationService: AuthenticationService) {
   
   }

  ngOnInit(): void {
  }

  deletePlank(){
    this._plankDataService.deletePlank(this.plank);
  }
  detailsPlank(){
    location.href=`cuttingboard/detail/${this.plank.id}`;
  }

}
