import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersTableComponent } from '@components/users-table/users-table.component';

describe('UsersTableComponent', () => {
    let component: UsersTableComponent;
    let fixture: ComponentFixture<UsersTableComponent>;

    beforeAll(async () => {
        TestBed.configureTestingModule({
            imports: [UsersTableComponent],
        });
        fixture = TestBed.createComponent(UsersTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have 10 person', () => {
        const { users } = component;
        if (users) {
            expect(users.length).toEqual(10);
            users.forEach((user) => {
                expect(user).toHaveProperty('id');
                expect(user).toHaveProperty('name');
                expect(user).toHaveProperty('city');
            });
        }
    });

    it('should table have title', () => {
        expect(component.title !== '').toBeTruthy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
