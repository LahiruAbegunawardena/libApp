import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowsPage } from './borrows';

@NgModule({
  declarations: [
    BorrowsPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowsPage),
  ],
})
export class BorrowsPageModule {}
