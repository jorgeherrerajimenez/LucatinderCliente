import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private idPropietario:Number;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPropietario = +params['id'];
    });
  }

  toSugerencias():void {
    this.router.navigate(['/sugerencias',this.idPropietario]);
  }

  toContactos():void {
    this.router.navigate(['/contactos',this.idPropietario]);
  }

  toDescartes():void {
    this.router.navigate(['/descartes',this.idPropietario]);
  }

  toMatchs(){
    this.router.navigate(['/matchs',this.idPropietario]);
  }

}
