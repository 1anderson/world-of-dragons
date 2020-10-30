import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import Dragon from 'src/app/shared/models/dragon';
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
    this.crudService.get(`${this.resourcePath}`).pipe(map((data: Array<any>) => {
      data.sort(this.sortByName);
      return data;
    }))
      .subscribe(dragons => {
        this.store$.next({ dragons });
      });
  }

  sortByName(a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
      return 0;
 }

  // tslint:disable-next-line: max-line-length
  updateDragon(dragonUpdated: Dragon, toatsReference: any) { // má pratica, o certo seria criar um provider global e injetar no módulo global para manuesear a referencia do toast
    this.crudService.put(`${this.resourcePath}/${dragonUpdated.id}`, dragonUpdated)
    .pipe(debounceTime(3000))
    .subscribe(() => {
        toatsReference.showMessage('Atualizado com Sucesso');
        this.store$.next({dragons: this.updateDragonInList(dragonUpdated)});
      }, err => {
        toatsReference.showErrorMessage('Ops, algo deu errado =x');
      });
  }

  updateDragonInList(dragonUpdated) {
    const { dragons } = this.store$.value;
    const index = dragons.findIndex((dragon: Dragon) => dragon.id === dragonUpdated.id);
    dragons[index] = dragonUpdated;
    return dragons;
  }

  deleteDragon(dragonID: number, toast: any) {
    this.crudService.delete(`${this.resourcePath}/${dragonID}`)
      .pipe(debounceTime(3000))
      .subscribe(() => {
        const { dragons } = this.store$.value;
        const listUpdatedDragons = dragons.filter(dragon => dragon.id !== dragonID);
        this.store$.next({dragons: listUpdatedDragons});
        toast.showMessage('Deletado com Sucesso');

      }, () => {
        toast.showErrorMessage('Ops, algo deu errado =x');
      });
  }

}
