import React from 'react';
import Form from '../components/Form/Index';
import Header from '../components/Header/Index';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
        </main>
      </>
    );
  }
}

export default Wallet;
