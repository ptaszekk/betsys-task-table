import { createSelector } from '@ngrx/store';
import { UsersState } from '@state/users.state';

export const selectFeature = (state: UsersState): UsersState => state;

export const selectUsers = createSelector(
    selectFeature,
    (state: UsersState) => state.users,
);
