import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const utilsPhoto = uploadPhoto();
  const utilsUser = createUser();

  return Promise.all([utilsPhoto, utilsUser])
    .then(([photo, user]) => {
      console.log(`${photo.body}`);
      console.log(`${user.firstName}`);
      console.log(`${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
      throw error;
    });
}

export default handleProfileSignup;
