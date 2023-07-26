function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  console.error('The fake API is not working currently');
  return Promise.reject(new Error('The fake API is not working currently'));
}

export default getFullResponseFromAPI;
