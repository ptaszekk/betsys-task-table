import { createReducer, on } from '@ngrx/store';
import { UsersState } from '@state/users.state';
import { setUsers } from '@state/users.actions';
import { User } from '@models/models';

export const initialState: UsersState = {
    users: [],
};

export const usersReducer = createReducer(
    initialState,
    on(setUsers, (state, { users }): { users: Array<User> } => ({
        ...initialState,
        users,
    })),
);
