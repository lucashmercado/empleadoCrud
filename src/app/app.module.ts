import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
// Módulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat'; // Asegúrate de que la versión es correcta y compatible
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// Componentes
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
 
 
 
// Importa tu configuración de Firebase
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
// animaciones
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // Corrección del paréntesis
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }