import React from 'react';
import { CommentCard, CommentText, CommentFooter, CommentCustomer, CommentActions } from './commentStyled';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

interface CommentProps {
  message: string;
  date: string;
  id: number;
  image: string;
  customer: string;
}

const Comment: React.FC<CommentProps> = ({ message, date, id, image, customer }) => {
  return (
    <CommentCard>
      <CommentText>{message}</CommentText>
      <CommentFooter>
        <CommentCustomer>
          <img src={image} alt={`${customer}'s profile`} />
          <div>
            <h4>{customer}</h4>
            <p>{date}</p>
          </div>
        </CommentCustomer>
        <CommentActions>
          <RxCheckCircled className='check' />
          <RxCrossCircled className='cross' />
        </CommentActions>
      </CommentFooter>
    </CommentCard>
  );
}

export default Comment;
