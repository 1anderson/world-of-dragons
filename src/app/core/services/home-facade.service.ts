import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  private readonly resourcePath = 'dragon'; // Todo organizar endpoints em um arquivo separado para reutilização.

  private store$ = new BehaviorSubject(null);
  state$ = this.store$.asObservable();
  constructor(private crudService: CrudService) { }

  getDragons() {
    this.crudService.get(`${this.resourcePath}`)
      .subscribe(dragons => {
        this.store$.next({ dragons });
      });
  }

  deleteDragon(dragonID: number) {
    this.crudService.delete(`${this.resourcePath}/${dragonID}`)
      .subscribe(response => {
        const { dragons } = this.store$.value;
        const listUpdatedDragons = dragons.filter(dragon => dragon.id !== dragonID);
        this.store$.next({dragons: listUpdatedDragons});
      });
  }

}
