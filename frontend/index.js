function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  var widgets = document.querySelectorAll('section div');
  for(let i = 0; i < widgets.length; i++) {
    widgets[i].classList.toggle('widget');
    widgets[i].setAttribute('tabIndex', i+1);
  }

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quoteOfTheDay = document.getElementsByClassName('quoteoftheday')[0];
  const quoteIdx = Math.floor(Math.random() * 10);
  const quoteObj = quotes[quoteIdx];

  const quoteDiv = document.createElement('div');
  quoteDiv.textContent = quoteObj.quote;

  const attributionDiv = document.createElement('div');
  const attributionText = `${quoteObj.author} in ${quoteObj.date}`;
  attributionDiv.textContent = attributionText;

  quoteOfTheDay.appendChild(quoteDiv);
  quoteOfTheDay.appendChild(attributionDiv);


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here


  const corpSpeakWidget = document.querySelector('.corporatespeak');
  const verb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const verb2 = verbs[Math.floor(Math.random() * verbs.length)];
  const noun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const noun2 = nouns[Math.floor(Math.random() * nouns.length)];
  const advb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const advb2 = adverbs[Math.floor(Math.random() * adverbs.length)];
  
  const sentenceP = document.createElement('p');
  sentenceP.textContent = `We need to ${verb1} our ${noun1} ${advb1} so we can ${verb2} our ${noun2} ${advb2}`;
  corpSpeakWidget.appendChild(sentenceP);


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  const countdownWidget = document.querySelector('.countdown');

  var numSeconds = 5;
  const countdownP = document.createElement('p');
  countdownP.textContent = 'T-minus 5...';

  countdownWidget.appendChild(countdownP);


  const timerInterval = setInterval(() => {
    numSeconds--;
    if(numSeconds > 0) {
      countdownP.textContent = `T-minus ${numSeconds}...`;
    } else {
      countdownP.textContent = 'Liftoff! 🚀';
      clearInterval(timerInterval);
    }
  }, 1000);


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  const friendsWidget = document.querySelector('.friends');
  const friendsP = document.createElement('p');

//  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const randomPerson = people[5];
const birthString = `${randomPerson.fname} ${randomPerson.lname} was born on ${randomPerson.dateOfBirth} and `;
  let friendsString = '';

  function getPersonById(friendId) {
    for(let i = 0; i < people.length; i++) {
      if(people[i].id == friendId) {
        return people[i].fname + ' ' + people[i].lname;
      }
    }

  }

  const numFriends = randomPerson.friends.length;
  if(numFriends == 2) {
    let friend1 = getPersonById(randomPerson.friends[0]);
    let friend2 = getPersonById(randomPerson.friends[1]);
    friendsString = `is friends with ${friend1} and ${friend2}`;

  }

  else if(randomPerson.friends.length) {
    friendsString = 'is friends with ';
    for(let i = 0; i < randomPerson.friends.length; i++) {
      if(i > 0) {
        friendsString += ', '
      }
      if(i == randomPerson.friends.length - 1) {
        friendsString += ' and ';
      }

      friendsString += getPersonById(randomPerson.friends[i]);
    }
    friendsString += '.';
  } else {
    friendsString = 'has no friends.';
  }
  friendsP.textContent = birthString + friendsString;
  friendsWidget.appendChild(friendsP);




  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
