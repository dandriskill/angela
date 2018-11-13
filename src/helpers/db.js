import { database } from '../config/constants';

export const write = ({
  bio,
  name,
  email,
}) => {
  database.ref("/").set({
    bio,
    name,
    email,
  });
}
