import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyConnexionComponent } from './my-connexion/my-connexion.component';
import { MyRegisterComponent } from './my-register/my-register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyTasksComponent,
    MyFooterComponent,
    MyConnexionComponent,
    MyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
