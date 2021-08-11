let users = [
  {
    name: 'Abdufattoh',
    age: 34,
    job: 'Qassob'
  },
  {
    name: 'Abdulaziz',
    age: 35,
    job: 'Futbalist'   
  },
  {
    name: 'Muhammad Yusuf',
    age: 24,
    job: 'Businessman'   
  }
];

for(let i = 0; i < users.length; i++){
  let name = users[i].name;
   document.querySelector('#tb').innerHTML += '<tr><td>'+ users[i].name +'</td><td>'+ users[i].age +'</td><td>'+ users[i].job +'</td><td><button class="btn btn-danger" onclick="deleteuser(\'' + name +'\')"><i class="fas fa-trash"></i> Delete</button></td></tr>';
};
document.querySelector('.btn-info').onclick = function(){
  let ism = document.querySelector('#name').value,
      yosh = document.querySelector('#age').value,
      kasb = document.querySelector('#job').value,
    user = {
        name: ism,
        age: yosh,
        job: kasb
    };
  if(ism !== '' && yosh !== '' && kasb !== ''){
      users.push(user);
      console.log(user);
      document.querySelector('#tb').innerHTML = '';
  for(let i = 0; i < users.length; i++){
       let name = users[i].name;
       document.querySelector('#tb').innerHTML += '<tr><td>'+ name +'</td><td>'+ users[i].age +'</td><td>'+ users[i].job +'</td><td><button class="btn btn-danger" onclick="deleteuser()"><i class="fas fa-trash"> Delete</i></button></td></tr>';
   }
   document.querySelector('#name').value = '';
   document.querySelector('#age').value = null;
   document.querySelector('#job').value = '';
  } else {
      alert('Inputni to\'ldiring!');
  }
};

function deleteuser(ism){
  let userArr = [];
  for(let a = 0; a < users.length; a++){
    if(users[a].name == ism){
      console.log();
      delete users[a]
    } else {
      usersArr.push(users[a])
    }
  }
  document.querySelector('#tb').innerHTML = '';
  for(let a = 0; a < userArr.length; a++){
    document.querySelector('#tb').innerHTML += '<tr><td>'+ userArr[a].name +'</td><td>'+ usersArr[a].age +'</td><td>'+ usersArr[a].job +'</td><td><button class="btn btn-danger" onclick="deleteuser(\'' + userArr[a].name +'\')"><i class="fas fa-trash"></i>Delete</button></td></tr>';
  };
 users = userArr;  
}; 
