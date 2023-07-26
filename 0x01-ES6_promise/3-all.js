import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const utilsPhoto = uploadPhoto();
  const utilsUser = createUser();

  return Promise.all([utilsPhoto, utilsUser])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
      throw new Error('Signup system offline', error);
    });
}

export default handleProfileSignup;
