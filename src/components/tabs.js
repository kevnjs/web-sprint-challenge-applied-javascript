const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const divElem = document.createElement('div');
  divElem.classList.add('topics');
  topics.forEach( topic => {
    const tabElem = document.createElement('div');
    tabElem.classList.add('tab');
    tabElem.textContent = topic;
    divElem.appendChild(tabElem);
  })
  return divElem;

}
import axios from 'axios';
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/topics').then(resp => {
    const data = resp.data.topics;
    const allTabs = Tabs(data);
    const entryPoint = document.querySelector(selector);
    entryPoint.appendChild(allTabs);
  });

}

export { Tabs, tabsAppender }
