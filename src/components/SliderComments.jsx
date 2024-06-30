// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import {

// } from '../components/styleComponents/SliderCommentsStyles';

// const SliderComments = () => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await fetch('/CommentsData.json');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setComments(data.slice(0, 10));
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     fetchComments();
//   }, []);

//   return (
//     <ReviewsSliderContainer>
//       <CommentTitle>Latest Review by Customers</CommentTitle>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation={true}
//         modules={[Navigation]}
//       >
//         {comments.map((comment, index) => (
//           <SwiperSlide key={index}>
//             <ReviewCard>
//               <ReviewContent>
//                 <p>{comment.comment}</p>
//                 <ReviewFooter>
//                   <ReviewerInfo>
//                     <ReviewerImage src='/default-profile.png' alt="Reviewer" />
//                     <div>
//                       <strong>{comment.customer}</strong>
//                       <p>{comment.date}</p>
//                     </div>
//                   </ReviewerInfo>
//                   <ReviewActions>
//                     <ReviewButton><FaThumbsUp color="green" /></ReviewButton>
//                     <ReviewButton><FaThumbsDown color="red" /></ReviewButton>
//                   </ReviewActions>
//                 </ReviewFooter>
//               </ReviewContent>
//             </ReviewCard>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </ReviewsSliderContainer>
//   );
// };

// export default SliderComments;
