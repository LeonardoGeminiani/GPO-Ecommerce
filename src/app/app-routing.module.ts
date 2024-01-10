import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AiPageComponent } from './components/ai-page/ai-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lesson', component: LessonComponent},
  {path: 'ai-page', component: AiPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
