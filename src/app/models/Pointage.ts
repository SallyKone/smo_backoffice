import {Employe} from './Employe';
import {Site} from './Site';
import {Time} from '@angular/common';



export class Pointage {
  numero: number;
  date_pointage: Date;
  etat: boolean;
  heure: Time;
  latitude: number;
  longitude: number;
  employe: Employe;
  site: Site;


}
