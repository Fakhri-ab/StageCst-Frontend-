import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategorieService} from '../../../../shared/services/categorie.service';
import {Router} from '@angular/router';
import {Categorie} from '../../../../shared/models/categorie';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie !: Categorie ;
  CategorieForm = new FormGroup({
    nomCategorie: new FormControl(''),
  });
  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    // formData.append('nomcat', this.prodFile);
    this.categorieService.addcat(this.CategorieForm.value).subscribe((res => this.router.navigateByUrl('/admin/Categories')));
    // console.log(this.ProduitForm.value);

  }

}
