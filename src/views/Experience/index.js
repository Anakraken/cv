import React from 'react'
import {
  ExpContainer
} from './styles';
import ExpItem from './components/expItem';
import ExpTitle from './components/expTitle';
import { exp } from './data';
import Button from '../../components/Button';

const Experience = () => {
  return (
    <ExpContainer>   
      <ExpTitle 
      title='Experience'
      subtitle='(Only last 3)'
      description="(Disclaimer: Many of the project I'd worked are properties of my formers employers and they don't want to publish information on then, hence I won't describe any detail that can compromise this)"
      />

        {
          exp.map((item) => (
            <ExpItem 
            title={item.title}
            date={item.date}
            description={item.description}
            key={item.id}
            exp={item.exp}
            />
          ))
        }

        {/* <Button /> */}
    </ExpContainer>
  )
}

export default Experience;
