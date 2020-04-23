/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sils-detail',
  templateUrl: './sil-detail.component.html',
  styleUrls: ['./sil-detail.component.css']
})
export class SilDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { Sil } from '../sils/sil.interface';
import { SilService } from '../sils/sil.service';


@Component({
  selector: 'app-sils-detail',
  templateUrl: './sil-detail.component.html',
  //styleUrls: ['./sils-detail.component.css']
})
export class SilDetailComponent implements OnInit {
    sil: Sil;
    //title = 'Sil Detail';
    
    sils: any[];

    constructor(private silService: SilService,
        private route: ActivatedRoute){
    }
    
    ngOnInit() {
        this.route.data.subscribe((data: { sil: Sil }) => {
            this.sil = data.sil;
        });
    }    
}

