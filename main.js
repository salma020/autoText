const containerEl =document.querySelector(".container")
const careers =['YouTuber','Web developer','Freelancer','Teacher','Instructor'];
let careerIndex = 0;
let characterIndex =0;
updateText();
function updateText() {
    characterIndex++;
    containerEl.innerHTML=`<h3>I AM ${careers[careerIndex].slice(0,1)==='I' ? 'AN' :'A'} ${careers[careerIndex].slice(0,characterIndex)}</h3>`;    
    if (characterIndex===careers[careerIndex].length) {
        careerIndex++;
        characterIndex=0;
    }
    if (careerIndex===careers.length) {
        careerIndex=0;
    }
    setTimeout(updateText, 400);
}





