import { Component, OnInit , TemplateRef } from '@angular/core';
import { AngularFireDatabaseModule , AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  nom : string = '' ;
  prenom : string = '' ;
  competence : string = '' ;
  specialite : string = '' ;
  mail : string = '' ;
  etat : string = 'en cours de traitement'
  user_id : any ;
    
  itemList : AngularFireList<any> ;
  itemList1 : AngularFireList<any> ;
  itemArray = []
  modalRef: BsModalRef;

  constructor(private fire:AngularFireAuth ,public db: AngularFireDatabase , private modalService: BsModalService) {

    this.fire.authState.subscribe(auth =>{
      if (auth){
        this.user_id = auth.uid
      }
    })



    this.itemList=db.list('offre_emploi');
    this.itemList1=db.list('demande_offre');
    this.itemList.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key
        this.itemArray.push(y as ListItemClass )
      })
    })
   }

  ngOnInit(): void {
  }

  openModalWithClass(template: TemplateRef<any>) {  
  
    this.modalRef = this.modalService.show(  
  
      template,  
      Object.assign({}, { class: 'gray modal-lg' })  
      );  
  }
   
  addDemande($key) {
  
    //console.log(this.user_id);
    this.itemList1.push({
      nom_condidat : this.nom ,
      prenom_condidat : this.prenom ,
      competence :this.competence ,
      specialite : this.specialite,
      mail_contact : this.mail ,
      id_offre : $key ,
      etat : this.etat,
      user_id : this.user_id
    
    })
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
