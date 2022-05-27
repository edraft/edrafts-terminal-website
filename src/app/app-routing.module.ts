import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'prompt', pathMatch: 'full' },
  { path: 'prompt', loadChildren: () => import('./modules/terminal/prompt.module').then(m => m.PromptModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
