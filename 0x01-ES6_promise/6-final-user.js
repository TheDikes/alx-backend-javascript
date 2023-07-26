import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allsettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => res.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    })));
}

export default handleProfileSignup;
