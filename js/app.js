
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

  const cartoonItem = createCartoonListItem(event.target);
  // We add the new cartoonItem to the cartoon list
  const listNode = document.querySelector('#cartoonList');
  listNode.appendChild(cartoonItem);

  // Form reset after entries are added to the list
  event.target.reset();

}

const createCartoonListItem = (form) => {

  // First we create a section that will hold the cartoon details
  const sectionElement = document.createElement('section');
  // Allocate list to class for css purposes
  sectionElement.className = 'list';

  // Then we create the three paragraphs that will hold the title,
  // description and year information then add them to the section
  // element
  const titleParagraph = document.createElement('h2');
  titleParagraph.innerText = `Title: ${form.title.value}`;
  sectionElement.appendChild(titleParagraph);

  const descriptionParagraph = document.createElement('h3');
  descriptionParagraph.innerText = `Description: ${form.desc.value}`;
  sectionElement.appendChild(descriptionParagraph);

  const yearParagraph = document.createElement('p');
  yearParagraph.innerText = `Year: ${form.year.value}`;
  sectionElement.appendChild(yearParagraph);

  const opinionParagraph = document.createElement('p');
  opinionParagraph.innerText = `Opinion: ${form.opinion.value}`;
  sectionElement.appendChild(opinionParagraph);



  return sectionElement;

}
