import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Categorie} from '../../../../shared/models/categorie';
import {CategorieService} from '../../../../shared/services/categorie.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MyToastrService} from '../../../../shared/services/my-toastr.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

 // @Input()

  id: any;

  cat: any ;


  CategorieForm = new FormGroup({
    nomCategorie: new FormControl(''),
  });


  constructor(private categorieService: CategorieService , private router: Router,
              private router1: ActivatedRoute, private toastr: MyToastrService) { }

  ngOnInit(): void {
      this.router1.paramMap.subscribe(paramMap => {
          this.id = paramMap.get('id');
          this.categorieService.getcategorie(this.id).subscribe(cat => {this.cat = cat; })
      })
    }

  updateCategorie( ) {
    this.categorieService.Editcat(this.cat, this.id)
        .subscribe(data => {
          console.log(data);
          this.cat = new Categorie();
            this.toastr.showNotification('top', 'right', 1, 'Categorie:', '', '...Categorie modifié....')
          this.gotoList();
        })
  }

  submit(f) {
    this.updateCategorie();
  }


  gotoList() {
    this.router.navigate(['/admin/Categories']);
  }
}
