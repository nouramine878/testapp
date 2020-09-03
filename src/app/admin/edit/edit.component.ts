import { Component, OnInit ,TemplateRef } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AngularFireDatabaseModule , AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  titre : string = '' ;
  description : string = '' ;
  competence : string = '' ;
  salaire : string = '' ;
  type_contrat : string = '' ;
  modalRef: BsModalRef;
  itemList: AngularFireList<any> ;
  itemArray = []
//--------
  constructor(private adminService : AdminService,
               public db: AngularFireDatabase ,
               private router : Router ,
               private modalService: BsModalService) { 

    this.itemList=db.list('offre_emploi');
    this.itemList.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key
        this.itemArray.push(y as ListItemClass )
      })
    })
  }
//-----------
  ngOnInit(): void {
  }
//-----------


openModalWithClass(template: TemplateRef<any>) {  
  
  this.modalRef = this.modalService.show(  

    template,  
    Object.assign({}, { class: 'gray modal-lg' })  
    );  
}
//----------
editForm($key){
   for (let value of this.itemArray){
     if (value["$key"] == $key){
      this.titre = value['titre'];
      this.description = value['description']; 
      this.competence = value['competence'];
      this.salaire = value['salaire'];
      this.type_contrat = value['type_contrat'];
     }
   }
}
//----------
onEdit($key) {
  this.titre
  this.description
  this.competence 
  this.salaire 
  this.type_contrat 

  this.itemList.set($key,{
    titre : this.titre,
    description : this.description ,
    competence : this.competence  ,
    salaire : this.salaire ,
    type_contrat : this.type_contrat 
  
  })
   this.itemArray =[];
}
//---------
onDelete($key){
   this.itemList.remove($key);
   this.itemArray = []
}


}
export class ListItemClass {
  $key : string;
  titre : string ;
  description : string ;
  competence : string ;
  salaire : string ;
  type_contrat :string ;
}
