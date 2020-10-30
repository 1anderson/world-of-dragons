import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Dragon from 'src/app/shared/models/dragon';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class DragonDetailService {
  private readonly resourcePath = 'dragon'; // Todo organizar endpoints em um arquivo separado para reutilização.
  private store$ = new BehaviorSubject(null);
  state$ = this.store$.asObservable();

  constructor(private crudService: CrudService) { }

  getDragon(dragonID: number) {
    this.crudService.get(`${this.resourcePath}/${dragonID}`)
      .pipe(map((dragon: Dragon) => {
        dragon.createdAt = new Date(dragon.createdAt).toLocaleDateString();
        return dragon;
      }))
      .subscribe(dragon => {
        this.store$.next({ dragon });
      });
  }

  updateState( dragon: Dragon ) {
    this.store$.next({ dragon });
  }
}
