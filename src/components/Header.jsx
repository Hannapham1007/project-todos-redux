import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const H1 = styled.h1`
  color: var(--white);
  font-size: 34px;
  text-align:center;
  margin-bottom:0px;
`;
const P = styled.p`
color: var(--white);
text-align:center;
`
// Header component 
export default function Header () {
  const date = moment().format('dddd, LL')
  return (
    <>
    <H1>Today's Tasks</H1>
    <P>{date}</P>
    </>
  )
}
