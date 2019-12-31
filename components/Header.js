import React, { Component } from 'react';
import { Menu, Form, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import contract from "../config/abi_json.js.js";
import web3 from '../src/web3';
import { Router } from '../routes';

class Header extends Component{


    render () {
        return (
            <Menu style={{ marginTop : '10px'}}>
                <Link route='/'>
                    <a className='item'>Car Tokenized</a>
                </Link>
                <Menu.Menu position="right">
                    <Form>
                        <Button primary style={{ marginTop : '2px', color:"#fff"}}>
                            Button1
                        </Button>
                    </Form>
                    <Form>
                        <Button primary style={{ marginTop : '2px', color:"#fff"}}>
                            Button2
                        </Button>
                    </Form>
                </Menu.Menu>
            </Menu>
        );
    };
}

export default Header;