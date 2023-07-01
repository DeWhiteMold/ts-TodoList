import React, { useState } from 'react';
import './App.css';
import { ICard } from './types/types';
import CreateCardForm from './components/CreateCardForm/CreateCardForm';
import Card from './components/card/Card';

function App() {
  const [cards, setCards] = useState<ICard[]>([]);

  const createCard = (newCard: ICard): void => {
    newCard.id = cards.length;
    setCards(cards => [...cards, newCard]);
  };

  const deleteCard = (cardToDelete: ICard): void => {
    setCards(cards.filter(card => card.id !== cardToDelete.id))
  }

  const changeCardStatus = (cardToChange: ICard):void => {
    setCards(cards.map(card => {
      if(card.id === cardToChange.id) {
        card.isDone = !card.isDone;
      }
      return card;
    }))
  }

  return (
    <div className="App">
      <header className="header">
        <CreateCardForm submitHandler={createCard}/>
        {
          cards.length > 0 && 
            cards.map(card => {
              return (
                <Card card={card} deleteHandler={deleteCard} changeStatusHandler={changeCardStatus} key={card.id}/>
              )
            })
        }
      </header>
    </div>
  );
}

export default App;
