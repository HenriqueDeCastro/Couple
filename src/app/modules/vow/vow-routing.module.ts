import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VowComponent } from './vow.component';
import { AppRoutesTitleEnum } from 'src/app/shared/classes/enums';

const routes: Routes = [
  {
    path: '',
    component: VowComponent,
    title: AppRoutesTitleEnum.VOW
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VowRoutingModule { }
