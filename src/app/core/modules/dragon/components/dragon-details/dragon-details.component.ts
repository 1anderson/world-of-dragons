import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DragonDetailService } from './services/dragon-detail.service';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {
  state$: Observable<any>;

  constructor(private activeRoute: ActivatedRoute, private dragonDetailService: DragonDetailService) { }

  ngOnInit(): void {
    this.state$ = this.dragonDetailService.state$;
    const { id } = this.activeRoute.snapshot.params;
    this.dragonDetailService.getDragon(id);
  }

}
