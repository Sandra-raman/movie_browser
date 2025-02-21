import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"register",component:RegisterComponent
    },
    {
        path:"savedMovies",component:SavedMoviesComponent
    },
    {
        path:"allMovies",component:AllMoviesComponent
    },
    {
        path:"viewMovies/:id",component:ViewMoviesComponent
    },
  
    {
        path:"**",component:PnfComponent
    },
];
