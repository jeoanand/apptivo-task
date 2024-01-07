import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  // {
  //   path: 'ui',
  //   component: UiDocumentComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
