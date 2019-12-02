import AsyncStorage from '@react-native-community/async-storage';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_IN_PROGRESS,
  USER_IS_VALID,
  USER_NAME_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
} from '../types';
import Firebase from '../../src';
import {Alert} from 'react-native';

export const onUserNameChanged = text => {
  return {type: USER_NAME_CHANGED, payLoad: text};
};
export const onFirstNameChanged = text => {
  return {type: FIRST_NAME_CHANGED, payLoad: text};
};
export const onLastNameChanged = text => {
  return {type: LAST_NAME_CHANGED, payLoad: text};
};
export const onEmailChanged = text => {
  return {type: EMAIL_CHANGED, payLoad: text};
};
export const onPasswordChanged = text => {
  return {type: PASSWORD_CHANGED, payLoad: text};
};

export const loadingControl = text => {
  return {
    type: LOGIN_IN_PROGRESS,
    payLoad: text,
  };
};
export const validatedUser = text => {
  return {
    type: USER_IS_VALID,
    payLoad: text,
  };
};
export const loginUser = (email, password, nav) => {
  return dispatch => {
    dispatch(loadingControl('true'));
    dispatch(() => {
      Firebase.auth
        .signInWithEmailAndPassword(email, password)
        .then(result => {
          const user = result.user;
          const uid =
            Firebase.auth.currentUser !== null
              ? Firebase.auth.currentUser.uid
              : user.uid;

          let userRef = Firebase.db.collection('users').doc(uid);
          let getDoc = userRef
            .get()
            .then(doc => {
              if (!doc.exists) {
                console.log('No such document!');
              } else {
                console.log('Document data:', doc.data());
                const toBeStored = doc.data();
                makeUserSession(toBeStored, dispatch, nav);
              }
            })
            .catch(err => {
              console.log('Error getting document', err);
            });
        })
        .catch(err => {
          var errorCode = err.code;
          var errorMessage = err.message;
          switch (errorCode) {
            default:
              Alert.alert(errorMessage);
              dispatch(loadingControl('false'));
              break;
          }

          // means the user is not there !  so call the create one and create the user here  and take the id
          // to make rest of the data available in Firestore against it
        });
    });
  };
};

export const userHasSession = nav => {
  return dispatch => {
    dispatch(loadingControl('true'));
    AsyncStorage.getItem('user_session_data', (_err, result) => {
      const res = JSON.parse(result);
      console.warn(res);

      if (res !== null && res.isValid === true) {
        nav.replace('Dashboard');
      } else {
        dispatch(loadingControl('false'));
      }
    });
  };
};
const makeUserSession = (data, dispatch, nav) => {
  AsyncStorage.setItem('user_session_data', JSON.stringify(data), () => {
    dispatch(loadingControl('false'));
    dispatch(validatedUser('true'));
    nav.replace('Dashboard');
  });
};

export const registerUser = (userData, nav) => {
  const {user_name, first_name, last_name, email, password} = userData;
  return dispatch => {
    dispatch(loadingControl('true'));
    console.warn(userData);
    dispatch(() => {
      Firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          const user = result.user;
          const uid =
            Firebase.auth.currentUser !== null
              ? Firebase.auth.currentUser.uid
              : user.uid;
          const doc = Firebase.db.collection('users').doc(uid);
          const toBeStored = {
            userName: user_name,
            firstName: first_name,
            lastName: last_name,
            email: email,
            profileImg: '',
            followerCount: 0,
            followingCount: 0,
            isValid: true,
          };
          doc.set(toBeStored);
          makeUserSession(toBeStored, dispatch, nav);
        })
        .catch(err => {
          var errorCode = err.code;
          var errorMessage = err.message;
          console.warn('rError', errorCode, errorMessage);
          switch (errorCode) {
            case 'auth/email-already-in-use':
              Alert.alert(errorMessage);
              dispatch(loadingControl('false'));
              break;
            default:
              dispatch(loadingControl('false'));
              break;
          }
        });
    });
  };
};
