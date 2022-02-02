import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService,
    private router: Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.localStorageService.getUser() === undefined) {
        this.router.navigate(['login']);
        return false;
      }
      else if(this.localStorageService.getUser()?.Role !== 'Administrador'){
        this.router.navigate(['']);
        return false;
      }
    return true;
  }

}
