import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        ShopComponent
    ],
    exports: [ShopComponent]
})
export class ShopModule { }