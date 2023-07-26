import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {

  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
      return new Error('Signup system offline', error);
    });
}

export default handleProfileSignup;
