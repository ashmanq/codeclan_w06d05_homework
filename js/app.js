
document.addEventListener('DOMContentLoaded', function() {

  const buttonClick = document.querySelector('#deleteAllBtn');
  buttonClick.addEventListener('click', handleButtonClick);
  
  const formInput = document.querySelector('#formSubmit');
  formInput.addEventListener('submit', handleFormSubmission);

})

const handleButtonClick = (event) => {
  const cartoonList = document.querySelector('#cartoonList');
  cartoonList.innerHTML = "";
}

const handleFormSubmission = (event) => {
  event.preventDefault();
  const listNode = document.querySelector('#cartoonList');

  // First we create a section that will hold the cartoon details

  const sectionElement = document.createElement('section');
  sectionElement.className = 'list';

  // Then we create the three paragraphs that will hold the title
  // description and year information

  const titleParagraph = document.createElement('h2');
  titleParagraph.innerText = event.target.title.value;
  const descriptionParagraph = document.createElement('h3');
  descriptionParagraph.innerText = event.target.desc.value;
  const yearParagraph = document.createElement('p');
  yearParagraph.innerText = event.target.year.value;

  sectionElement.appendChild(titleParagraph);
  sectionElement.appendChild(descriptionParagraph);
  sectionElement.appendChild(yearParagraph);

  listNode.appendChild(sectionElement);

  event.target.title.value = '';
  event.target.desc.value = '';
  event.target.year.value = '';

  // We then add the paragraphs to the section elements

  // We finally add the section element to the cartoons list

}
