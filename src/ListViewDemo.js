/**
 * created by hushicai on 2017/10/18
 */

import React from 'react';

import {
    ListView,
    View,
    Text
} from 'react-native';
import {generate} from "./data";
import styles from './styles';

const data = generate();

class ListViewDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => (r1.key !== r2.key)})
        };
    }
    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        });
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                initialListSize={1}
                pageSize={10}
                removeClippedSubviews={true}
            />
        );
    }
    _renderRow = (item, sectionId, rowId) => {
        return (
            <View key={'key_item_' + rowId} style={styles.item}>
                <Text>{item.value}</Text>
            </View>
        );
    };
}



export default ListViewDemo;