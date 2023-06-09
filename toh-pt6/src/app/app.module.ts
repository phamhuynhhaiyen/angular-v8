import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';
import { AddressComponent } from './address/address.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import { BorderDirective } from './directive/border-directive.directive';
import { HighlightDirective } from './directive/highlight-directive.directive';

@NgModule({
      imports: [
            BrowserModule,
            AppRoutingModule,
      ],
      declarations: [
            DashboardLayoutComponent,
            AddressComponent,
            LogoutComponent,
            AppComponent,
            BorderDirective,
            HighlightDirective
      ],
      providers: [
            AuthService,
            AuthGuardService
      ],
      bootstrap: [AppComponent]
})
export class AppModule { }