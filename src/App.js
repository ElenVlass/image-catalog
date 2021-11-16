import React from 'react';
import Container from './components/Container';
import ImageList from './components/ImageList';
import ShowTest from './utils/Test';

export default function App() {
  return (
    <Container>
      <ImageList />
      <ShowTest />
    </Container>
  );
}
