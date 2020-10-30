import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CreateDragonService {

  constructor(private fb: FormBuilder, private crudService: CrudService) {}
  private readonly resourcePath = 'dragon'; // Todo organizar endpoints em um arquivo separado para reutilização.
  createForm(): FormGroup {
    return this.fb.group({
     name: ['', Validators.required],
     type: ['', Validators.required]
    });
  }

  createDragon(body: any) {
    return this.crudService.post( this.resourcePath, body);
  }

}
