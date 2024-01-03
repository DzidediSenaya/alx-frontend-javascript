import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Destructure the results array if you don't need individual variables
      // const [photoResponse, userResponse] = results;
      console.log(`${results[1].body.firstName} ${results[1].body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
