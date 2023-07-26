function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error('Error from the API:', error.message);
      return new Error(); // Return an empty Error object
    });
}

export default handleResponseFromAPI;
