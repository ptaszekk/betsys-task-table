import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataService } from '@services/data.service';
import { setUsers } from '@state/users.actions';
import { selectUsers } from '@state/users.selectors';
import { User } from '@models/models';
import { UsersTableComponent } from '@components/users-table/users-table.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgIf, AsyncPipe, UsersTableComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements OnInit {
    dataService: DataService = inject(DataService);
    store: Store = inject(Store);
    title = 'betsys-task-table';
    users$: Observable<Array<User>> = this.store.select(selectUsers);

    ngOnInit(): void {
        this.dataService.getUsers().subscribe((users) => {
            this.store.dispatch(setUsers({ users }));
        });
    }
}
