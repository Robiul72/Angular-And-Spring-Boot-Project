import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponentComponent } from './owner-component/owner-component.component';
import { HouseComponentComponent } from './house-component/house-component.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSideberComponent } from './main-sideber/main-sideber.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HouseViewComponentComponent } from './house-view-component/house-view-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnerComponentComponent,
    HouseComponentComponent,
    MainHeaderComponent,
    MainSideberComponent,
    MainFooterComponent,
    MainBodyComponent,
    HouseViewComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
