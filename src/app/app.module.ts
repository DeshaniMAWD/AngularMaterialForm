import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FirstformComponent } from './form/mha101mainfile/mha101mainfile.component';
import { SecondformComponent } from './form/secondform/secondform.component';
import { ThirdformComponent } from './form/thirdform/thirdform.component';
import { InputformComponent } from './form/inputform/inputform.component';
import { LastformComponent } from './form/lastform/lastform.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstformComponent,
    SecondformComponent,
    ThirdformComponent,
    InputformComponent,
    LastformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
