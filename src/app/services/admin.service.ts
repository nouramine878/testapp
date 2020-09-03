import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule , AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
  
  itemArray = []
  itemList: AngularFireList<any> ;
  constructor(public db: AngularFireDatabase) { 
    this.itemList=db.list('offre_emploi');
  }
  addJob (titre , description , competence , salaire , type_contrat){
    this.itemList.push({
      titre : titre ,
      description : description ,
      competence : competence ,
      salaire : salaire,
      type_contrat : type_contrat
    
    })
  }
}
