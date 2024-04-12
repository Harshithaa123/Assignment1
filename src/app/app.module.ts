import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    EmployeeComponent // if we  declare any component we have to import and declare in array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
