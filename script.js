const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji(){
  let response = await fetch('https://emoji-api.com/emojis?access_key=8835b47d5bb43a963435e029ffa277c957a1b753');

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emoijCode: data[i].unicodeName,
    })
    
  }
}
getEmoji();

console.log(emoji);

btnEl.addEventListener('click',()=>{
  const randomNum = Math.floor(Math.random() * 1500);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emoijCode;
})