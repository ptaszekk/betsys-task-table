import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapUsers } from '@helpers/app.helpers';
import { map, Observable, take } from 'rxjs';
import { FetchedUser, User } from '@models/models';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private http = inject(HttpClient);
    private baseUrl = 'https://jsonplaceholder.typicode.com';

    getUsers(): Observable<Array<User>> {
        return this.http.get<Array<FetchedUser>>(`${this.baseUrl}/users`).pipe(take(1), map((fetchedUsers) => mapUsers(fetchedUsers)));
    }
}
