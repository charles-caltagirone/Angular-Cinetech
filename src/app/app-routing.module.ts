import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './mediaIndex/mediaIndex.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MediaComponent, pathMatch: 'full' },
  { path: 'details/:type/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
