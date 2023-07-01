import { FC } from 'react';
import { CardProps } from '../../types/types';
import './Card.scss'

const  Card: FC<CardProps> = ({card, deleteHandler: deleteCard, changeStatusHandler: changeStatus}) => {

  return (
    <div className='card'>
      <span className="card__info">{card.name}</span>
      <span className="card__info">{card.createAt}</span>
      <span className="card__info">{card.isDone ? "Готово" : "Не готово"}</span>
      {
        card.deadline && <span className="card__info">{card.deadline}</span>
      }
      {
        card.description && <span className="card__info">{card.description}</span>
      }
      <button className="card__status-btn" onClick={() => changeStatus(card)}>{card.isDone ? 'Не готово' : 'Готово'}</button>
      <button className="card__delete-btn" onClick={() => deleteCard(card)}>Удалить</button>
    </div>
  )
}

export default Card;