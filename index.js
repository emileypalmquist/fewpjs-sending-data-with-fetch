const docBody = document.querySelector('body')

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  }).then(resp => resp.json())
    .then(obj => {
      userToDom(obj.id)
    })
    .catch(error => { showErrorMessage(error.message) });
}

function userToDom(userId) {
  const newShowIdTag = document.createElement('p');
  newShowIdTag.textContent = userId;
  docBody.appendChild(newShowIdTag);
}

function showErrorMessage(message) {
  const domErrorMessageTag = document.createElement('p');
  domErrorMessageTag.textContent = message;
  docBody.appendChild(domErrorMessageTag);
}

