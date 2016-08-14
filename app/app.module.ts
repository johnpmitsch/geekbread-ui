import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    RecipeDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
