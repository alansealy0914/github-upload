import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sil } from '../sils/sil.interface';

@Component({
  selector: 'app-sil-detail',
  templateUrl: './sil-detail.component.html',
  styleUrls: ['./sil-detail.component.css']
})

export class SilDetailComponent implements OnInit {
  sil: Sil;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { sil: Sil }) => {
        this.sil = data.sil;
    });
    
  }
}








   
    

  
    

        

    