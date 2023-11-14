import { createAction, props } from '@ngrx/store';
import { User } from '@models/models';

export const setUsers = createAction('[Users] set users', props<{ users: Array<User> }>());
