import { Route } from '@angular/router';
// import { HomeRoutes } from './home/home.routes';


import { BoxofficeComponent } from './index';


export const BoxofficeRoutes: Route[] = [
	// {
	// 	path: 'boxoffice', redirectTo: 'boxoffice/home', pathMatch: 'full'
	// },
  	{
    	path: 'boxoffice', component: BoxofficeComponent
    	// children: [
	    // 	...HomeRoutes
    	// ]
  	}
];
