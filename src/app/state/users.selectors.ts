import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '@state/users.state';

// export const selectFeature = (state: UsersState): UsersState => state;
export const selectorFeature = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
    selectorFeature,
    ({ users }: UsersState) => users,
);
