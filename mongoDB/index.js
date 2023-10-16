const getData = require('./db'); 

const main = async () => {
    try {
        const data = await getData();
        const filteredData = await data.find({ name: 'nord' }).toArray();
        console.log(filteredData);
    } catch (error) {
        console.error(error);
    }
};

main();
