import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { HomeFacadeService } from '../../services/home-facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(ToastComponent) toast!: ToastComponent;
  state$: Observable<any>;

  constructor(private homeFacadeService: HomeFacadeService, private router: Router) { }

  ngOnInit(): void {
    this.state$ = this.homeFacadeService.state$;
    this.homeFacadeService.getDragons();
  }

  deleteDragon(dragonId: number) {
    this.homeFacadeService.deleteDragon(dragonId);
  }

  updateDragon(dragon: any) {
    console.log(dragon);
    this.toast.showMessage();
  }

  canUpdate(dragon) {
    return !dragon?.name || !dragon?.type;
  }
}
