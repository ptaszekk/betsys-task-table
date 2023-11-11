import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FetchedUser, User } from '../models/models';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    http = inject(HttpClient);
    private baseUrl = 'https://jsonplaceholder.typicode.com';

    getUsers(): Observable<Array<User>> {
        return this.http.get<Array<FetchedUser>>(`${this.baseUrl}/users`).pipe(map((fetchedUsers) => fetchedUsers.map(({ id, name, address: { city } }) => ({ id, name, city }))));
    }
}
