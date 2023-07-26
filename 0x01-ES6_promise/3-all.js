import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const utilsPhoto = uploadPhoto();
  const utilsUser = createUser();

  return Promise.all([utilsPhoto, utilsUser])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
      throw error;
    });
}

export default handleProfileSignup;
