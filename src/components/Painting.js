import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

export default function Painting({
  imageUrl = defaultImg,
  title,
  author,
  authorTag = 'не известно',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 10 ? 'есть в наличии' : 'заканчивается'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
