axios.get('https://internal-vp.broadcastingsuite.tv/api/channels', {
  headers: {
     accept: 'application/jason'
  }
})
  
.then(response => {
  console.log(response.data.url);
  console.log(response.data.explanation);
})
.catch(error => {
  console.log(error);
});



  