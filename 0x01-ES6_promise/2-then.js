function handleResponseFromAPI(promise) {
  if (promise) {
    console.log('Got a response from the API');
    return Promise.resolve({
      status: 200,
      body: 'success',
    });
  }
  console.error('');
  return Promise.reject(new Error(''));
}

export default handleResponseFromAPI;
