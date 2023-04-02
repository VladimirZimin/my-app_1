import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
// import paintings from './paintings.json';

// const data = paintings[0];

// Компоненты - это функция на входе получает данные, на выходе разметка
// рендер шаблонов карточки через Компоненты + Props

// function Painting({ url, title, author, authorTag, price }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={author}>{authorTag}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

/**
{
  id: 'id-1',
  url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
  title: 'Feathers. Art abstract',
  price: 500,
  author: {
    tag: 'ractapopulous',
    url: 'https://pixabay.com/users/ractapopulous-24766/',
  },
  quantity: 10,
};

const painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Цена: {data.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

console.log(painting);
 */

// ReactDOMClient.createRoot(document.querySelector('#root')).render(painting);

// рендер компонента
// ReactDOMClient.createRoot(document.querySelector('#root')).render(
//   <Painting
//     url={data.url}
//     title={data.title}
//     author={data.author.url}
//     authorTag={data.author.tag}
//     price={data.price}
//   />, // Props
// );

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/**
 * Props <Painting a="5" b="51" />
 * a="5" - строка
 * a={5} - число
 * a={{c: 10}} обьект в обьекте
 */
