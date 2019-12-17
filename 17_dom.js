// 1. Create an index.html file and put four p elements as above:
// Get the first paragraph by using document.querySelector(tagname) and tag name
const paragraph = document.querySelector('p');
console.log(paragraph);

// 2. Get get each of the the paragraph using document.querySelector('#id') and by their id
const paragraphOne = document.querySelector('#one');
console.log(paragraphOne);

// 3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let paragraphList = document.querySelectorAll('p');
console.log(paragraphList);

// 4. Loop through the nodeList and get the text content of each paragraph
paragraphList.forEach((item) => {
    console.log(item.innerHTML);
});

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphList[paragraphList.length - 1].innerHTML = 'Fourth Paragraph';

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
paragraphList.forEach((item) => {
    item.classList.add('text-content');
    console.log(item);
});

// 7. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

paragraphList.forEach((item) => {
    item.style.color = 'blue';
    item.style.background = 'grey';
    item.style.border = '1px solid black';
    item.style.fontSize = '24px';
    item.style.fontFamily = 'Arial';
});


// Object
let person = {
    firstname: 'Anna',
    lastname: 'Riazantseva',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
    ismarried: true,
    skills: ['HTML','CSS','JavaScript','Sass'],
    personInfo: function(){
        let sent = `I am ${this.firstname} ${this.lastname}. The number of my skills: ${this.skills.length}.`;
        return sent;
    }
};

person.city = 'London';

console.log(person);

let textBlock = document.createElement('div');
textBlock.classList.add('skills');
textBlock.innerHTML = person.personInfo();

let newList = document.createElement('ul');
newList.classList.add('list');

for(let i = 0; i<person.skills.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = person.skills[i];
    newList.appendChild(listItem);
}

textBlock.appendChild(newList);
document.body.appendChild(textBlock);

console.log(textBlock);

// 8. Select all paragraphs and loop through each elements and give the first
// and third paragraph a color of color, and the second and the fourth paragraph a red color

for(let i = 0; i < paragraphList.length; i++) {
    if(i % 2 === 0) {
        paragraphList[i].style.color = 'green';
    } else {
        paragraphList[i].style.color = 'red';
    }
}

// 