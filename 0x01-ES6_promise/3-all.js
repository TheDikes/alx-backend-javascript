// import { uploadPhoto, createUser } from './utils';

// function handleProfileSignup() {
//   const utilsPhoto = uploadPhoto();
//   const utilsUser = createUser();

//   return Promise.all([utilsPhoto, utilsUser])
//     .then(([photo, user]) => {
//       console.log(`${photo.body}`);
//       console.log(`${user.firstName}`);
//       console.log(`${user.lastName}`);
//     })
//     .catch((error) => {
//       console.error('Signup system offline', error);
//       throw error;
//     });
// }

// export default handleProfileSignup;

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();

  return Promise.all([uploadPhotoPromise, createUserPromise])
    .then(([photoResponse, userResponse]) => {
      console.log(`Body: ${photoResponse.body}`);
      console.log(`First Name: ${userResponse.firstName}`);
      console.log(`Last Name: ${userResponse.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
