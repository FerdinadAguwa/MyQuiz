function displayScores() {
    document.querySelector('#scoresDiv').style.display = 'block';
    Object.keys(localStorage).forEach(function (key) {
      console.log(localStorage.getItem(key));
    
      var li = document.createElement('li');
      li.textContent = key + '-' + localStorage.getItem(key);
      document.querySelector('#scoreslist').appendChild(li);
      });
  
    // document.querySelector('.container').style.display = 'none';
    // document.querySelector('#resultsDIV').style.display = 'none';
}

displayScores();