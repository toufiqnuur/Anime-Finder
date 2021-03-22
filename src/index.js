import axios from 'axios';
import './css/style.css';
import './components/searchBar';
import './components/card';
import './components/modal';

const [search, main] = [$('search-bar'), $('main')];

search.onSubmit = () => {
  main.children ? main.innerHTML = "" : false
  axios.get(`${search.api + search.query}`)
  .then(response => {
    /* Render search result */
    response.data.results.forEach(result=> {
      const card = document.createElement('anime-card');
      card.bind = result;
      main.appendChild(card);
    });
    /* Show modal detail information */
    $all('anime-card').forEach((card, id) => {
      card.onclick = () => {
        $('modal-details').bind = response.data.results[id];
        $('modal-details').classList.add('show');
      }
    });
  });
}

function $(argument) {
  return document.querySelector(argument);
}

function $all(argument) {
  return document.querySelectorAll(argument);
}
