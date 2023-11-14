import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { distinctUntilChanged, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataService } from '@services/data.service';
import { setUsers } from '@state/users.actions';
import { selectUsers } from '@state/users.selectors';
import { User } from '@models/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements OnInit {
    dataService = inject(DataService);
    store = inject(Store);
    title = 'betsys-task-table';
    users$!: Observable<Array<User>>;

    ngOnInit(): void {
        this.dataService.getUsers().pipe(distinctUntilChanged()).subscribe((users) => {
            this.store.dispatch(setUsers({ users }));
        });

        this.users$ = this.store.select(selectUsers);
        this.users$.pipe().subscribe((users) => {
            console.warn(`from sub${users}`);
        });
    }
}
