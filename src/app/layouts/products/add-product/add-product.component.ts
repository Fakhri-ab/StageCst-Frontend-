import { Component, OnInit } from '@angular/core';
import {Produit} from '../../../../shared/models/produit';
import {FormControl, FormGroup} from '@angular/forms';
import {ProduitService} from '../../../../shared/services/produit.service';
import {Router} from '@angular/router';
import {CategorieService} from '../../../../shared/services/categorie.service';
import {Categorie} from '../../../../shared/models/categorie';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {MyToastrService} from '../../../../shared/services/my-toastr.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  cat!: Categorie;
  prodFile
  message
  imagePath
  imgURL

  produit: Produit ;

    ProduitForm = new FormGroup({
    nomProduit: new FormControl(''),
    prixProduit: new FormControl(''),
    qteProduit: new FormControl(''),
      description: new FormControl(''),
      categorie: new FormControl('')

  });
  constructor(private produitService: ProduitService, private router: Router,
              private CategoriesService: CategorieService, private toastr: MyToastrService) { }

  ngOnInit(): void {
   // this.getallcat();
      this.dropdownSettings = {
      idField: 'idCategorie',
      textField: 'nomCategorie',
    };
    this.CategoriesService.GetAllCat().subscribe(
        x => this.cat = x,
        e => console.log(e),
     )
  }

  submit() {
    if (this.ProduitForm.valid) {
      const formData = new FormData() ;
      this.ProduitForm.value.categorie = this.ProduitForm.value.categorie[0]
      formData.append('produit', JSON.stringify(this.ProduitForm.value));
      formData.append('file', this.prodFile);
      this.toastr.showNotification('top', 'right', 2, 'Produit ', 'Ajouté avec succees', '.......')
      this.produitService.addProduit(formData).subscribe((res => this.router.navigateByUrl('/admin/Products')));
      // console.log(this.ProduitForm.value);
    } else {
      this.toastr.showNotification('top', 'right', 3, 'erreur:', 'verifier vos champs', '.......')
    }


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


}
