import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetaiulComponent } from './products/product-detaiul.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';
@NgModule({
    imports: [ 
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', 
          canActivate: [ ProductGuardService ], 
          component: ProductDetaiulComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ])
    ],
    declarations: [ 
      AppComponent,
      ProductListComponent,
      ConvertToSpacesPipe,
      StarComponent,
      ProductDetaiulComponent,
      WelcomeComponent
    ],
    providers: [ProductGuardService],
    bootstrap: [ AppComponent ]
  })
export class AppModule { }
