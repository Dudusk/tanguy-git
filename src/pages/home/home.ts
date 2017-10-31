import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//En commentaire : ce qu'a fait le prof


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // app: AppData;

  // constructor(public navCtrl: NavController){
  //   this.app = new AppData("nom", 0.3);
  // }

  title: String;
  app: App;

  constructor(public navCtrl: NavController) {
  	this.title = "Title";
  	this.app = new App(this.title, 0.1);

  	console.log(this.app);
  }

  test(){
  	console.log("test Bouton déclanché");
  }
}

// class AppData{
//   constructor(public nom: String, public version: Number){
//   }
// }

class App {
	nom: String;
	version: Number;

 	constructor(nom: String, version: Number){
 		this.nom = nom;
 		this.version = version;
 	}	
}	