import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Sil } from '../sils/sil.interface';
import { SilService } from '../sils/sil.service';


@Injectable()
export class SilDetailResolver implements Resolve<Sil> {
  constructor(
    private silService: SilService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Sil> {
    let id = route.paramMap.get('silId');

    return this.silService.getSil(id).pipe(
      take(1),
      map(sil => {
        if (sil) {
          return sil;
        } else {
          this.router.navigate(['/sil']);
          return null;
        }
      })
    );
  }
}
