import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../shared/services/categorie.service';
import {Router} from '@angular/router';
import {Categorie} from '../../../shared/models/categorie';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cats !: Categorie;
  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    this.getAllcategories();
  }


  getAllcategories() {
    this.categorieService.GetAllCat().subscribe(res => {this.cats = res;
      console.log(res)
    })
  }

  goToAdd() {
    this.router.navigate(['admin/Categories/AddCategorie'])
  }

}
