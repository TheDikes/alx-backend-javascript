import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .settled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => res.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : String(res.reason),
    })));
}

export default handleProfileSignup;
