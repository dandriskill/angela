import { ref, firebaseAuth } from '../config/constants';

export const auth = (email, pw) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export const logout = () => {
  return firebaseAuth().signOut();
}

export const login = (email, pw) => {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export const resetPassword = (email) => {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export const saveUser = (user) => {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}
