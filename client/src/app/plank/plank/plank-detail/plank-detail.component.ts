import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlankDataService } from '../../plank-data.service';
import { Plank } from '../../plank.model';

@Component({
  selector: 'app-plank-detail',
  templateUrl: './plank-detail.component.html',
  styleUrls: ['./plank-detail.component.css']
})
export class PlankDetailComponent implements OnInit {
  public plank: Plank ;
  constructor(private route: ActivatedRoute, private plankDataService: PlankDataService) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => 
      this.plank = item['plank'])
  }

}
