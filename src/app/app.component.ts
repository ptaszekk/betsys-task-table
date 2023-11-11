import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class AppComponent {
    dataService = inject(DataService);
    title = 'betsys-task-table';
    users$ = this.dataService.getUsers().pipe(tap(console.warn));
}
