import { Component, OnInit  , TemplateRef } from '@angular/core';
import { AngularFireDatabaseModule , AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
   

  itemList1 : AngularFireList<any> ;
  itemArray = []
  itemList: AngularFireList<any> ;
  itemList2: AngularFireList<any> ;
  itemArray1 = []
  shown : boolean = false ;
  modalRef: BsModalRef;
  dateMeet : Date;
  lieu : string = ''; 
  etat_demande : string = 'demande accepter';
  user_id : any ;


  constructor(private fire:AngularFireAuth,public db: AngularFireDatabase , private modalService: BsModalService ) {

    this.fire.authState.subscribe(auth =>{
      if (auth){
        this.user_id = auth.uid
      }
    })


    this.itemList2=db.list('rendez_vous');
    this.itemList1=db.list('demande_offre');
    this.itemList1.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key
        this.itemArray.push(y as ListItemClass )
      })
    })


    this.itemList=db.list('offre_emploi');
    this.itemList.snapshotChanges()
    .subscribe(Action => {
      Action.forEach(Action =>{
        let y = Action.payload.toJSON()
        y["$key"]=Action.key;
        
        //this.itemArray.forEach(element => {
         // if (element["id_offre"] === y["$key"]){
            
            this.itemArray1.push(y as ListItemClass1 )
           
          //}
          
       // });
      })
    })
   
   }

  ngOnInit(): void {
  }


  show(){
    this.shown=true ;
  }
  onPrintDate(key1,key2,mail_contact,nom_condidat,prenom_condidat,specialite,competence,user_id){
    this.itemList2.push({
      lieu : this.lieu ,
      date : this.dateMeet,
      etat : 'demande accepter',
      id_demande : key1 ,
      id_offre : key2
    })
    this.shown = false ;
    this.itemList1.set(key1,{
      nom_condidat :nom_condidat,
      prenom_condidat : prenom_condidat,
      competence: competence ,
      specialite : specialite,
      mail_contact: mail_contact ,
      etat : 'demande accepter' ,
      id_offre : key2,
      user_id : user_id 
    })
    this.itemArray = []

  }
  //------------------
  openModalWithClass(template: TemplateRef<any>) {  
  
    this.modalRef = this.modalService.show(  
  
      template,  
      Object.assign({}, { class: 'gray modal-lg' })  
      );  
  }

  //------------------
  onRejectDemande(key ,key2,  mail_contact
    ,nom_condidat
    ,prenom_condidat,
    specialite,
    competence,
    user_id) {
    this.itemList1.set(key,{
      nom_condidat :nom_condidat,
      prenom_condidat : prenom_condidat,
      competence: competence ,
      specialite : specialite,
      mail_contact: mail_contact ,
      etat : 'demande refuser' ,
      id_offre : key2, 
      user_id : user_id 
    })

    this.itemArray = []
  }
}

export class ListItemClass {
  $key : string;
  nom : string ;
  prenom : string ;
  competence : string ;
  specialite : string ;
  mail : string ;
  id_offre :string ;
}

export class ListItemClass1 {
  $key : string;
  titre : string ;
  description : string ;
  competence : string ;
  salaire : string ;
  type_contrat: string ;
}