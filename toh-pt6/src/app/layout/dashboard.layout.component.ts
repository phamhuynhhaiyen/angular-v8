import { Component } from '@angular/core';
@Component({
	template: `
  <logout></logout>
	<nav [ngClass] = "'parent-menu'">
		<a routerLink="/article" routerLinkActive="active" >Article</a>
		<a routerLink="/address" routerLinkActive="active">Address</a>
	</nav>  
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class DashboardLayoutComponent {
} 