axios.get('https://internal-vp.broadcastingsuite.tv/api/channels', { 
 headers: {accept: 'application/jason'}
})

.then(response => {
  setTimeout (function() {
  $('#channelName').text(response.data.data.name);
  },2000 )
})   
  
.catch(error => {
  console.log(error);
});  

  
axios.get('https://internal-vp.broadcastingsuite.tv/api/channels', { 
  headers: {accept: 'application/jason'}
})

.then(response => {
  $('#image_path').image(response.data.data.image);
  
})   
  
.catch(error => {
  console.log(error);
}); 




  


  
 
    
 

  
 






 

    





  