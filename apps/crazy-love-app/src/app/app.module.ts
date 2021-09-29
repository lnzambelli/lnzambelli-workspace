import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ToolbarModule} from 'libraries/menu-library/src/lib/toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ContactPageComponent,
    ShopPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
