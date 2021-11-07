import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page-autentificacion',
    pathMatch: 'full'
  },
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
    loadChildren: () => import('./pages/contenido/mis-proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'new-project',
    loadChildren: () => import('./pages/contenido/new-project/new-project.module').then( m => m.NewProjectPageModule)
  },
  {
    path: 'nuevo-requerimiento',
    loadChildren: () => import('./pages/contenido/nuevo-requerimiento/nuevo-requerimiento.module').then( m => m.NuevoRequerimientoPageModule)
  },
  {
    path: 'mis-requerimientos',
    loadChildren: () => import('./pages/contenido/mis-requerimientos/mis-requerimientos.module').then( m => m.MisRequerimientosPageModule)
  },
  {
    path: 'nueva-entrega',
    loadChildren: () => import('./pages/contenido/nueva-entrega/nueva-entrega.module').then( m => m.NuevaEntregaPageModule)
  },
  {
    path: 'mis-entregas',
    loadChildren: () => import('./pages/contenido/mis-entregas/mis-entregas.module').then( m => m.MisEntregasPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
