import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromAdmin, fromAdminSelectors } from '../store';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'cs-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  product$: Observable<Product | undefined>;

  constructor(private store: Store<fromAdmin.State>) { }

  ngOnInit(): void {
    this.product$ = this.store.select(fromAdminSelectors.getCurrentProduct);
  }

}
