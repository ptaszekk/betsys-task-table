import { importProvidersFrom } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(CommonModule, BrowserModule, AppRoutingModule, StoreRouterConnectingModule.forRoot()), provideStore()],
})
    .catch((err) => console.error(err));
