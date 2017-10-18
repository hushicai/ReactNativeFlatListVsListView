/**
 * created by hushicai on 2017/10/18
 */

export const generate = (len = 5000) => {
    let data = [];

    for(let i = 0; i < len; i++) {
        data.push({
            key: i,
            value: 'test'
        });
    }

    return data;
};