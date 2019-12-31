import React, { Component } from 'react';
import { Card, Button, Form, Input } from 'semantic-ui-react';
import web3 from '../config/web3';
const Maker = require('@makerdao/dai');
import Layout from '../components/Layout';
import contract from "../config/abi_json.js";
import { Link } from '../routes';


class MakerIndex extends Component {
  render() {
    return (
      <Layout>
        This will be the list
      </Layout>
    );
  }
}

export default MakerIndex; 