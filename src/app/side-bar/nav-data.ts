import { RouterLink } from "@angular/router";
import {INavbarData} from "./helper";

export const navbarData : INavbarData[] =[
  {
  routeLink :'dashboard',
  icon :'fal fa-home',
  label :'Dashboard'
},

{
  routeLink: 'products',
  icon: 'fal fa-box-open',
  label: 'Products',
  items: [
    { routeLink: 'products/Create', label: '   ● Create Product' },
    { routeLink: 'products/Delete', label: '   ● Delete Product' },
    { routeLink: 'products/Update', label: '   ● Update Product' }
  ]
},

{
  routeLink :'statistics',
  icon :'fal fa-chart-bar',
  label :'Statistics'
}


]
