import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { User } from '@models/models';

@Component({
    selector: 'app-users-table',
    standalone: true,
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss'],
    imports: [
        NgForOf,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent {
    @Input() users!: Array<User>;
    @Input() title!: string;
}
