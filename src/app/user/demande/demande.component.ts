import { Component, OnInit , TemplateRef } from '@angular/core';
import { AngularFireDatabaseModule , AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
    
  itemList3: AngularFireList<any> ;
  itemList2: AngularFireList<any> ;
  itemList1 : AngularFireList<any> ;
  itemArray = []
  itemArray1 = []
  itemArray2 = []
  user_id : any ;
  modalRef: BsModalRef;

  constructor( private fire:AngularFireAuth, public db: AngularFireDatabase , private modalService: BsModalService) {

    this.fire.authState.subscribe(auth =>{
      if (auth){
        this.user_id = auth.uid
      }
    })
    
    this.itemList1=db.list('demande_offre');
    this.itemList1.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key
        this.itemArray.push(y as ListItemClass )
      })
    })
    this.itemList2=db.list('offre_emploi');
    this.itemList2.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key
        this.itemArray1.push(y as ListItemClass1 )
      })
    })

    this.itemList3=db.list('rendez_vous');
    this.itemList3.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key
        this.itemArray2.push(y as ListItemClass2 )
      })
    })



   }

  ngOnInit(): void {
  }
  //----------------
  onDeleteDemande(key) {
    this.itemList1.remove(key);
    this.itemArray = []
  }
  //----------------
  showDetailMeeting(){

  }
  //----------------

  openModalWithClass(template: TemplateRef<any>) {  
  
    this.modalRef = this.modalService.show(  
  
      template,  
      Object.assign({}, { class: 'gray modal-lg' })  
      );  
  }

}
export class ListItemClass1 {
  $key : string;
  titre : string ;
  description : string ;
  competence : string ;
  salaire : string ;
  type_contrat :string ;
}

export class ListItemClass {
  $key : string;
  nom : string ;
  prenom : string ;
  competence : string ;
  specialite : string ;
  mail : string ;
  id_offre :string ;
  etat : string ;
  user_id : any ;
}
export class ListItemClass2 {
  $key : string;
  date : Date;
  lieu : string ;
  id_demande : string ;
  id_offre : string ;
  etat : string ;
}