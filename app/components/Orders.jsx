import React from 'react';
import Order from './Order';
import { List, ListItem, ListSubHeader, ListDivider, ListItemContent, ListCheckbox } from 'react-toolbox/lib/list';
import ReactDom from 'react-dom';
import Paper from 'material-ui/Paper';
import { postRefresh } from '../queries';

export default class Orders extends React.Component {
    render() {
        const {ticket, onClick = () => { }, 
             onOrderTagSelected = () => { }} = this.props;
        if (!ticket) return null;
        return (
            <Paper className="orders" style={{ 'borderRadius': '0' }}>
                <List>
                    {ticket.orders.map(({uid, name, quantity, price, priceTag, portion, productId, tags, states, locked}) =>
                        <Order key={uid}
                            name={name}
                            quantity={quantity}
                            price={price.toFixed(2)}
                            priceTag={priceTag}
                            portion={portion}
                            productId={productId}
                            orderTags={tags}
                            orderStates={states}
                            onClick={onClick}
                            orderUid={uid}
                            locked={locked}/>
                    )}
                </List>
            </Paper>
        );
    }

    componentDidUpdate() {
        var node = ReactDom.findDOMNode(this);
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    }
} 