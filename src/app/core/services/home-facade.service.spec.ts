import { TestBed } from '@angular/core/testing';

import { HomeFacadeService } from './home-facade.service';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Observable } from 'rxjs';

describe('HomeFacadeService', () => {
  let service: HomeFacadeService;
  let crudService;
  beforeEach( async () => {
    crudService = jasmine.createSpyObj(['put', 'get', 'delete']);
    crudService.put.and.returnValue(new Observable( observable => observable.next(true)  ));
    crudService.get.and.returnValue(new Observable( observable => observable.next([{id: 2 , name: 'dragonTeste'}])  ));
    crudService.delete.and.returnValue(new Observable( observable => observable.next([{id: 2 , name: 'dragonTeste'}])  ));
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: CrudService,
        useValue: crudService
     }],
    });
    service = TestBed.inject(HomeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update Dragon', () => {
    service.getDragons();
    const dragon = {id: 2 , name: 'dragonTesteAtualizado'};
    const toast = { showMessage() {}};
    service.updateDragon(dragon, toast);
    service.state$.subscribe(value => {
      expect(value.dragons[0].name).toBeTruthy(dragon.name);
    });
  });

  it('should get Dragons', () => {
    service.getDragons();
    service.state$.subscribe(value => {
      expect(value.dragons.length).toBeTruthy(1);
    });
  });

  it('should be delete Dragons', () => {
    service.getDragons();
    const toast = { showMessage() {}};
    service.deleteDragon(2, toast);
    service.state$.subscribe(value => {
      expect(value.dragons.length).toBeTruthy(0);
    });
  });
});
