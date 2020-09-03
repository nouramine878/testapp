import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  titre : string = '' ;
  description : string = '' ;
  competence : string = '' ;
  salaire : string = '' ;
  type_contrat : string = '' ;
  show : boolean = false;
  message : string ;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }

  onCreate()  {
    this.adminService.addJob(this.titre ,
                             this.description ,
                            this.competence ,
                            this.salaire,
                            this.type_contrat) ;
     
    this.show=true ;
    this.message='offre est bien créer '
}

}
