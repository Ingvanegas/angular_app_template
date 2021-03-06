import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sidenav: SidenavService) { }

  ngOnInit(): void {
  }
  
  toggleRightSidenav() {
    this.sidenav.toggle();
  }

}
