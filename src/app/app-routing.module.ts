import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { ArticleContentComponent } from './components/article-content/article-content.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  {path: '', redirectTo:"/page1", pathMatch:'full'},
  {path:'page1', component:TopnavComponent},
  {path:'page2', component:MenubarComponent},
  {path:'page3', component:ArticleContentComponent},
  {path:'parent', component:ParentComponent},
  {path:'child', component:ChildComponent},
  {path:'display', component:DisplayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
