import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpModule } from '@angular/http';
import { AppRouteModule } from './app-route.module';
import { AuthService } from './auth.service';
import { UsersComponent } from './users/users.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './users/users.service';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    TableModule,
  ],
  providers: [AuthService, AuthguardGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
