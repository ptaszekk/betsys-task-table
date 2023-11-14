import { createAction, props } from '@ngrx/store';
import { User } from '@models/models';

enum UsersActions {
    SetUsers = '[Users] set users',
}

export const setUsers = createAction(UsersActions.SetUsers, props<{ users: Array<User> }>());
