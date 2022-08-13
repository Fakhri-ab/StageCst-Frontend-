import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;


}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'design_app', class: '', },
    { path: '/admin/Products', title: 'Products',  icon: 'design_app', class: '', },
    { path: '/admin/Categories', title: 'Categories',  icon: 'design_app', class: '', },
    { path: '/admin/demande/alldemande', title: 'Mes demandes',  icon: 'users_single-02', class: '' , },
    // tslint:disable-next-line:max-line-length
    { path: '/admin/demande/demanderecue', title: ' demandes en attentes',  icon: 'users_single-02', class: '',  },
    { path: '/admin/user', title: 'users',  icon: 'users_single-02', class: '',  },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[] = [] ;
  constructor() {
   }

 ngOnInit() {
  ROUTES.forEach(menuItem => {
      this.menuItems.push(menuItem);
  }) ;
}

// console.log(this.menuItems)


  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
