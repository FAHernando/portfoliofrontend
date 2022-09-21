import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*import { UserService } from 'src/app/servicios/user.service';*/
import { PortfolioAlexisService } from 'src/app/servicios/portfolio-alexis.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

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
