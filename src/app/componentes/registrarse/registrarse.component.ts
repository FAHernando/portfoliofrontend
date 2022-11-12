import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*import { UserService } from 'src/app/servicios/user.service';*/
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioAlexisService,
    /*private userService: UserService,*/
              private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.datosPortfolio.logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch(error => console.log(error));
  }
}
