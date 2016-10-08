import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { RecipeComponent }  from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeService } from './recipe.service';

import { routing } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [ 
    AppComponent,
    RecipeComponent,
    RecipeDetailComponent
  ],
  providers: [
    RecipeService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
