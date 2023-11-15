import { FetchedUser, User } from '@models/models';

export const mapUsers = (users: Array<FetchedUser>): Array<User> => users.map(({ id, name, address: { city } }) => ({ id, name, city }));
