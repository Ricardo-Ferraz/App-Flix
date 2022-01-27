import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  showError(message: string){
    if(message.includes('404')) message= 'Usuário não registrado!'
    if(message.includes('Unknown')) message= 'Tente novamente mais tarde! (Api não está rodando)'
    if(message.includes('400')) message= 'Usuário já cadastrado'
    this.toastr.error(message, 'Algo deu errado', {
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    });
  }

  showSuccess(message: string){
    this.toastr.success(message, 'Sucesso!', {
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    });
  }
}
