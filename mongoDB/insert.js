const mongodb=require('./db');

const insert = async()=>{
    const connect = await db.connect();
    const result = await db.insert(
        [
            {
                name:'shivam',
                age:19
            },
            {
                name:'john',
                age:21
            },
            {
                name:'fred',
                age:21
            }
        ]
        );
        if(result.acknowledge){
            console.log('data inserted');
        }
}
insert();