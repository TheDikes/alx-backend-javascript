import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const utilsPhoto = uploadPhoto('photo-profile-1');
  const utilsUser = createUser('Guillaume', 'Salva');

  return Promise.all([utilsPhoto, utilsUser])
    .then(([photoResponse, userResponse]) => {
      // Handle the responses here if needed
      const response = {
        uploadPhoto: photoResponse.body,
        createUser: `${userResponse.firstName} ${userResponse.lastName}`,
      };
      console(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      return response;
    })
    .catch((error) => {
      console.error('Signup system offline', error);
      throw error;
    });
}

export default handleProfileSignup;
