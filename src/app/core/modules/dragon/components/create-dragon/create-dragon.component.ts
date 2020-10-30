import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { CreateDragonService } from './services/create-dragon.service';

@Component({
  selector: 'app-create-dragon',
  templateUrl: './create-dragon.component.html',
  styleUrls: ['./create-dragon.component.scss']
})
export class CreateDragonComponent implements OnInit {
  @ViewChild(ToastComponent) toast!: ToastComponent;
  message = '';
  form: FormGroup;
  constructor(private createDragonService: CreateDragonService) { }
  ngOnInit(): void {
    this.form = this.createDragonService.createForm();
  }

  createDragon() {
    if (this.isValidForm()) {
      this.createDragonService.createDragon(this.form.value)
      .pipe(debounceTime(3000))
      .subscribe( () => {
        this.showToast('Criado com Sucesso!', 'sucess');
      }, () => {
        this.showToast('Ops! houve algum problema =x', 'error');
      });
    } else {
      this.showToast('Existem Campos Obrigatórios não preenchidos', 'error');
    }
  }

  isValidForm() {
    return this.form.valid;
  }

  showToast(message: string, type: 'error' | 'sucess') {
    if (type === 'sucess') {
      this.message = message;
      this.toast.showMessage();
    } else {
      this.message = message;
      this.toast.showErrorMessage();
    }
  }

}
