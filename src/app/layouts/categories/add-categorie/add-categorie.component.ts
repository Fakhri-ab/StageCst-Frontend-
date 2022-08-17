import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategorieService} from '../../../../shared/services/categorie.service';
import {Router} from '@angular/router';
import {Categorie} from '../../../../shared/models/categorie';
import {MyToastrService} from '../../../../shared/services/my-toastr.service';

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
  constructor(private categorieService: CategorieService, private router: Router,
              private toastr: MyToastrService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.CategorieForm.valid) {
      this.categorieService.addcat(this.CategorieForm.value).subscribe((res => {
        this.router.navigateByUrl('/admin/Categories')
        this.toastr.showNotification('top', 'right', 2, 'Categorie ', 'Ajouté avec succees', '.......')
      }));
    } else {
      this.toastr.showNotification('top', 'right', 3, 'erreur:', 'verifier vos champs', '.......')
    }

  }

}
