import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '@state/users.state';

export const selectFeature = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
    selectFeature,
    ({ users }: UsersState) => users,
);
