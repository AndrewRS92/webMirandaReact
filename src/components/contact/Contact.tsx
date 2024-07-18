import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column, ColumnTitle, TableOption, Row, TableSelect, Table, 
  TableBody, TableHeader, TableFooter, TablePages, TableButtons, 
  TableButton, TablePageButtons, TablePageButton, CommentAction } from './ContactStyles';
import { SwiperContainer } from '../commentSlider/commentStyled';
import CommentsSlider from '../commentSlider/commentsSlider';
import { RootState, AppDispatch } from '../../features/store';
import { getContactListThunk } from '../../features/slices/contact/contactThunk';
import { Comment } from '../../types';

const createPagination = (array: Comment[], size: number): Comment[][] => {
  const aux: Comment[][] = [];
  for (let i = 0; i < array.length; i += size) {
    aux.push(array.slice(i, i + size));
  }
  return aux;
}

const Contact: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const contactStatus = useSelector((state: RootState) => state.contact.status);
  const contactDataList = useSelector((state: RootState) => state.contact.dataList);
  const contactError = useSelector((state: RootState) => state.contact.error);
  const [option, setOption] = useState<number>(0);
  const [list, setList] = useState<Comment[]>([]);
  const [commentPages, setCommentPages] = useState<Comment[][]>(createPagination(list, 10));
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pageSize = 10;

  useEffect(() => {
    if (contactStatus === "idle") {
        dispatch(getContactListThunk());
    } else if (contactStatus === "pending") {
        setIsLoading(true);
    } else if (contactStatus === "fulfilled") {
        setList(contactDataList);
        setCommentPages(createPagination(contactDataList, pageSize));
        setIsLoading(false);
    } else if (contactStatus === "rejected") {
        alert(contactError);
    }
  }, [contactStatus, contactDataList, contactError, dispatch]);

  const allComments = () => {
    setOption(0);
    setPage(0);
    setList(contactDataList);
    setCommentPages(createPagination(contactDataList, pageSize));
  }

  const publishedComments = () => {
    const aux = contactDataList.filter((comment) => !comment.archived);
    setOption(1);
    setPage(0);
    setList(aux);
    setCommentPages(createPagination(aux, pageSize));
  }

  const archivedComments = () => {
    const aux = contactDataList.filter((comment) => comment.archived);
    setOption(2);
    setPage(0);
    setList(aux);
    setCommentPages(createPagination(aux, pageSize));
  }


  return (
    <>
      <SwiperContainer>
        <CommentsSlider />
      </SwiperContainer>
      <br /><br />
      {!isLoading && (
        <>
          <TableHeader>
            <TableSelect>
              <TableOption type={option === 0 ? 'selected' : ''} onClick={allComments}>All Comments</TableOption>
              <TableOption type={option === 1 ? 'selected' : ''} onClick={publishedComments}>Published</TableOption>
              <TableOption type={option === 2 ? 'selected' : ''} onClick={archivedComments}>Archived</TableOption>
            </TableSelect>
          </TableHeader>
          <Table>
            <TableBody>
              <Row>
                <ColumnTitle>Contact Id</ColumnTitle>
                <ColumnTitle>Date</ColumnTitle>
                <ColumnTitle>Customer</ColumnTitle>
                <ColumnTitle>Comment</ColumnTitle>
                <ColumnTitle>Action</ColumnTitle>
              </Row>
              {
                commentPages[page]?.map((comment) => (
                  <Row key={comment.id}>
                    <Column>#{comment.id}</Column>
                    <Column>{comment.date}</Column>
                    <Column>{comment.customer}</Column>
                    <Column>{comment.comment}</Column>
                    <Column>
                    </Column>
                  </Row>
                ))
              }
            </TableBody>
          </Table>
          <TableFooter>
            <TablePages>
              <h4>Showing {pageSize * page + (commentPages[page]?.length || 0)} of {list.length}</h4>
            </TablePages>
            <TableButtons>
              <TableButton onClick={() => page > 0 && setPage(page - 1)}>Prev</TableButton>
              <TablePageButtons>
                {
                  commentPages.map((_, index) => 
                    (index === page || (index >= page - 2 && index <= page + 2)) &&
                    <TablePageButton type={page === index ? 'selected' : 'none'} key={index} onClick={() => setPage(index)}>
                      {index + 1}
                    </TablePageButton>
                  )
                }
              </TablePageButtons>
              <TableButton onClick={() => page + 1 < commentPages.length && setPage(page + 1)}>Next</TableButton>
            </TableButtons>
          </TableFooter>
        </>
      )}
    </>
  );
}

export default Contact;
