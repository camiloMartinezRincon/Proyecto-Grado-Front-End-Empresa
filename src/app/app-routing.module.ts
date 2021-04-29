import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page-autentificacion',
    loadChildren: () => import('./pages/autentificacion/landing-page-autentificacion/landing-page-autentificacion.module').then( m => m.LandingPageAutentificacionPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/autentificacion/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/autentificacion/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/autentificacion/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./pages/contenido/proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'new-project',
    loadChildren: () => import('./pages/contenido/new-project/new-project.module').then( m => m.NewProjectPageModule)
  },
  {
    path: '',
    redirectTo: 'landing-page-autentificacion',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
