import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {
  constructor(private params:ActivatedRoute, private service: OrderDetailsService){} 

  getMenuId: any
  menuData:any
  ngOnInit() {
    this.getMenuId = this.params.snapshot.paramMap.get('id')
    console.log(this.getMenuId, 'getmenu')

    if(this.getMenuId) {
      this.menuData = this.service.dDetails.filter((value) => {
       return value.id == this.getMenuId
      })
    }
  }
}
