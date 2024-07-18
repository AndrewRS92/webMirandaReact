import React from 'react';
import comments from '../../asset/CommentsData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CommentSliderWrap, CommentTitle } from './commentStyled';
import Comment from './comment';


interface CommentData {
  id: number;
  comment: string;
  customer: string;
  date: string;
}

const CommentsSlider: React.FC = () => {
  const recentComments: CommentData[] = comments.slice(0, 10);

  return (
    <CommentSliderWrap>
      <CommentTitle>Latest Review by Customers</CommentTitle>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
      >
        {recentComments.map(comment => (
          <SwiperSlide key={comment.id}>
            <Comment 
              message={comment.comment} 
              customer={comment.customer}  
              date={comment.date}
              id={comment.id}
              image='./profile.jpg'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CommentSliderWrap>
  );
}

export default CommentsSlider;
