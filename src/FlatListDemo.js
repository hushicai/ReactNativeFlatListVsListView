/**
 * created by hushicai on 2017/10/18
 */

import React from 'react';

import {
    FlatList,
    View,
    Text
} from 'react-native';

import {generate} from "./data";
import styles from './styles';

const datasource = generate();

class FlatListDemo extends React.Component {
    render() {
        return (
            <FlatList
                data={datasource}
                renderItem={this._renderItem}
                keyExtractor={this._KeyExtractor}
                getItemLayout={this._getItemLayout}
            />
        );
    }
    _renderItem = ({item, index}) => {
        return (
            <Item item={item} />
        );
    };

    _KeyExtractor = (item) => {
        return 'key_item_' + item.key;
    };

    _getItemLayout = (data, index) => {
        return {length: 20, offset: 20 * index, index};
    };
}

class Item extends React.PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <Text>{this.props.item.value}</Text>
            </View>
        );
    }
}

export default FlatListDemo;