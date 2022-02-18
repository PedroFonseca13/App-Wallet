import React from 'react';
import Form from '../components/Form/Index';
import Header from '../components/Header/Index';
import Table from '../components/Table/Index';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
          <Table />
        </main>
      </>
    );
  }
}

export default Wallet;
