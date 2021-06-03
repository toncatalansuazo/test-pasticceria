import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromHome, fromHomeSelectors } from '../store';
import { Product } from 'src/app/models/product';
import { fromUiActions } from 'src/app/shared/store';
import { Sidebars } from 'src/app/models/sidebars';

@Component({
  selector: 'cs-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  currentProduct$: Observable<Product | undefined>;

  constructor(private store: Store<fromHome.State>) { }

  ngOnInit(): void {
    this.listenCurrentProduct()
  }

  listenCurrentProduct() {
    this.currentProduct$ = this.store.select(fromHomeSelectors.selectCurrentProduct);
  }

  onCloseSidebar() {
    this.store.dispatch(fromUiActions.closeSidebar({id: Sidebars.HomeSideBarRight}));
  }

}
