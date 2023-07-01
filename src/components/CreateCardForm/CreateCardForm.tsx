import { FC, useState } from 'react';
import './CreateCardForm.scss'
import { CreateCardFormProps, ICard } from '../../types/types';

const CreateCardForm: FC<CreateCardFormProps> = ({submitHandler: createCard}) => {

  const [cardInfo, setCardInfo] = useState<ICard>({
    name: '',
    createAt: '',
    isDone: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    switch(e.target.name) {
      case 'name': 
        cardInfo.name = e.target.value;
        break;
      case 'descriptnion': 
        cardInfo.description = e.target.value;
        break;
      case 'deadline':
        cardInfo.deadline = e.target.value;
        break;
    }
    setCardInfo(cardInfo);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    cardInfo.createAt = new Date(Date.now()).toString()
    createCard(cardInfo);
    setCardInfo({
      name: '',
      createAt: '',
      isDone: false,
    })
  }

  return (
    <form className='card-form' onSubmit={handleSubmit}>
      <input name='name' type="text" className="card-form__input" required onChange={handleChange}/>
      <textarea name='descriptnion' className="card-form__input" />
      <input name='deadline' type="date" className="card-form__input" />
      <button type="submit" className="card-form__submit-btn">Добавить</button>
    </form>
  )
}

export default CreateCardForm;