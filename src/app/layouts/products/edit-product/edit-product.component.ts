import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../../../shared/services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../../../../shared/services/categorie.service';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {Categorie} from '../../../../shared/models/categorie';
import {Produit} from '../../../../shared/models/produit';
import {FormControl, FormGroup} from '@angular/forms';
import {MyToastrService} from '../../../../shared/services/my-toastr.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  dropdownSettings: IDropdownSettings = {};
  cat!: Categorie;
  prodFile
  message
  imagePath
  imgURL

  id: any;
  produit: Produit ;


  ProduitForm = new FormGroup({
    nomProduit: new FormControl(''),
    prixProduit: new FormControl(''),
    qteProduit: new FormControl(''),
    description: new FormControl(''),
    categorie: new FormControl('')

  });

  constructor(private produitService: ProduitService, private router: Router, private router1: ActivatedRoute,
              private CategoriesService: CategorieService, private toastr: MyToastrService) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      idField: 'idCategorie',
      textField: 'nomCategorie',
    };
    this.CategoriesService.GetAllCat().subscribe(
        x => this.cat = x,
        e => console.log(e),
    )

    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.produitService.getProduit(this.id).subscribe(cat => {this.produit = cat; })
    })
  }

  updateProduit( ) {
    const formData = new FormData() ;
    this.ProduitForm.value.categorie = this.ProduitForm.value.categorie[0]
    formData.append('produit', JSON.stringify(this.ProduitForm.value));
    formData.append('file', this.prodFile);
    // @ts-ignore
    this.produitService.EditProduit(formData, this.id)
        .subscribe(data => {
          console.log('hhhhhhhhhh' , data);
          this.toastr.showNotification('top', 'right', 1, 'Produit:', '', '...Produit modifié....')
          this.gotoList();
        })
  }


  submit1(f) {
     this.updateProduit();
  }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.prodFile = file;
      // this.f['profile'].setValue(file);

      const mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      const reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

  gotoList() {
    this.router.navigate(['/admin/Products']);
  }

}
