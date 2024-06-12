import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakedGoodsTableComponent } from './baked-goods-table/baked-goods-table.component';
import { ActivityTwoComponent } from './activities/activity-two/activity-two.component';
import { ActivityThreeComponent } from './activities/activity-three/activity-three.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BakedGoodsTableComponent },
  { path: 'activity-two', component: ActivityTwoComponent },
  { path: 'activity-three', component: ActivityThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
