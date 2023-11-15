import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';
import { Store, StoreModule } from '@ngrx/store';
import { DataService } from '@services/data.service';

describe('AppComponent', () => {
    const service = DataService;
    const httpClient = HttpClient;
    const store = Store;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, HttpClientModule, AppComponent, StoreModule.forRoot()],
            providers: [DataService, Store],
        });
    });

    it('App should be created', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    it('Store should be created', () => {
        expect(store).toBeTruthy();
    });

    it('Data Service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('http client should be created', () => {
        expect(httpClient).toBeTruthy();
    });
});
