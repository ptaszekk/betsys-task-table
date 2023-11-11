import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class AppComponent {
    title = 'betsys-task-table';
    abc = of('asd');
}
