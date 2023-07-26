function handleResponseFromAPI(promise) {
  return promise
    .then((data) => {
      console.log('Got a response from the API', data);
      return Promise.resolve({
        status: 200,
        body: 'success',
      });
    })
    .catch((error) => {
      console.error(error.message);
      return Promise.reject(new Error(''));
    });
}

export default handleResponseFromAPI;
