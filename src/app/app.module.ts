import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRowComponent } from './user-list/user-row/user-row.component';
import { AddressCellComponent } from './user-list/user-row/address-cell/address-cell.component';
import { HttpClientModule } from '@angular/common/http';
import { HoverTitleComponent } from './hover-title/hover-title.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRowComponent,
    AddressCellComponent,
    HoverTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
