import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.html'
})
export class NavigationComponent implements OnInit {
        companyName = 'APOS';
        constructor(private loginService: AuthenticationService ){}
    ngOnInit() {
    }
}
