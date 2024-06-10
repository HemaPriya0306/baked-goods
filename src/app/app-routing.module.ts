import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakedGoodsTableComponent } from './baked-goods-table/baked-goods-table.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: BakedGoodsTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
