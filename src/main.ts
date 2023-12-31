import { importProvidersFrom } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideStore, StoreModule } from '@ngrx/store';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { usersReducer } from '@state/users.reducers';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            CommonModule,
            HttpClientModule,
            BrowserModule,
            AppRoutingModule,
            StoreModule.forRoot(),
            StoreRouterConnectingModule.forRoot(),
        ),
        provideStore({ users: usersReducer }),
        provideHttpClient(),
    ],
})
    .catch((err) => console.error(err));
