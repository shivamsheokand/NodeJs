module.exports= reqfilter = (req, res,next) =>{
    if(!req.query.age){
        res.send('Pls Provide Age!!!')
    }else if(req.query.age<18){
        res.send('Ur under 18');
    }else if(req.query.age>18){
        next();
    }else{
        res.send('Pls Provide Vaild Age');
    }
}