import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataService } from '@services/data.service';

describe('DataService', () => {
    let service: DataService;
    let httpClient: HttpClient;

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, HttpClientModule],
            providers: [DataService],
        });
        service = TestBed.inject(DataService);
        httpClient = TestBed.inject(HttpClient);
    });

    it('Data Service should be created', () => {
        expect(service).toBeTruthy();
    });
    it('Http Client should be created', () => {
        expect(httpClient).toBeTruthy();
    });
});
