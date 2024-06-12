import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BakedGoodsTableComponent } from './activities/activity-one/baked-goods-table/baked-goods-table.component';
import { NewBakedGoodsComponent } from './activities/activity-one/new-baked-goods/new-baked-goods.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { ActivityTwoComponent } from './activities/activity-two/activity-two.component';
import { ActivityThreeComponent } from './activities/activity-three/activity-three.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BakedGoodsTableComponent,
    NewBakedGoodsComponent,
    NotificationComponent,
    ActivityTwoComponent,
    ActivityThreeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
