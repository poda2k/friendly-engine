
exports.getDataPage = (req,res)=>{
    res.render('home/Data',{
        pageTitle : 'Data' ,
        name : req.session.name,
        auth:  req.session.isloggedin
    });
}

exports.GetOperationType = (req,res)=>{
    const value = req.body.ops ;

    if(value==='Mean'){
        res.render('home/operations',{
            pageTitle : 'Data' ,
            name : req.session.name,
            auth:  req.session.isloggedin ,
            ops : 'Mean'
        })
    }else if(value==='STD'){
        res.render('home/operations',{
            pageTitle : 'Data' ,
            name : req.session.name,
            auth:  req.session.isloggedin ,
            ops : 'STD'
        })
    }else{
        res.render('home/operations',{
            pageTitle : 'Data' ,
            name : req.session.name,
            auth:  req.session.isloggedin ,
            ops : 'CHI'
        })
    }
}