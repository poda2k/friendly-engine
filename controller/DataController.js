
exports.getDataPage = (req,res)=>{
    res.render('home/Data',{
        pageTitle : 'Data' ,
        name : req.user.name,
        auth:  req.isAuthenticated()
    });
}

exports.GetOperationType = (req,res)=>{
    const value = req.body.ops ;

    if(value==='Mean'){
        res.render('home/operations',{
            pageTitle : 'Data' ,
            name : req.user.name,
            auth:  req.isAuthenticated(),
            ops : 'Mean' ,
            col : 0
        })
    }else if(value==='STD'){
        res.render('home/operations',{
            pageTitle : 'Data' ,
            name : req.user.name,
            auth:  req.isAuthenticated() ,
            ops : 'STD',
            col : 0
        })
    }else{
        res.render('home/operations',{
            pageTitle : 'Data' ,
            name : req.user.name,
            auth:  req.isAuthenticated(),
            ops : 'CHI',
            col : 0
        })
    }
}
//                                                          //
//                             MEAN                         //
exports.POSTmeanTable = (req,res)=>{
    const col = req.body.variables;
    const row = req.body.rows ;

    res.render('home/operations',{
        ops : 'Mean',
        col : col ,
        row : row ,
        pageTitle : 'operations' ,
        name : req.user.name,
        auth:  req.isAuthenticated(),
        mean : 0

    })
}



exports.postMeanData =  (req,res)=>{

    const numbers = req.body.arrayOfNumbers ;
    const r = req.body.r ;
    const c = req.body.c ;

    console.log(r,c) ;
    const changed = numbers.map(str => parseInt(str, 10));
    console.log(changed);
    let mean = getMeanValue(changed);
    console.log(numbers);
    console.log(mean) ;
    let testarraysum = GetSumOfArrayColumns(changed);
    console.log(testarraysum); 
    // console.log("testing");
    res.render('home/mean',{
        auth:  req.isAuthenticated(),
        mean : mean,
        pageTitle : 'operations' ,
        name : req.user.name
      
    })
}
//                                                 //
//                       STD                       //
exports.POSTstdTable = (req,res)=>{
    const col = req.body.variables;
    const row = req.body.rows ;

    res.render('home/operations',{
        ops : 'STD',
        col : col ,
        row : row ,
        pageTitle : 'operations' ,
        name : req.user.name,
        auth:  req.isAuthenticated(),
        STD : 0

    })
}

exports.postSTDdata = (req,res)=>{

    const numbers = req.body.arrayOfNumbers;

    const changed = numbers.map(str => parseInt(str, 10));

    const STD = getSTD(changed) ;

    res.render('home/STD',{
        auth:  req.isAuthenticated(),
        STD : STD,
        pageTitle : 'operations' ,
        name : req.user.name
    })

}
//                                  //
//                CHI               //

exports.POSTCHITable = (req,res)=>{
    const col = req.body.variables;
    const row = req.body.rows ;

    res.render('home/operations',{
        ops : 'CHI',
        col : col ,
        row : row ,
        pageTitle : 'operations' ,
        name : req.user.name,
        auth:  req.isAuthenticated(),
        CHI : 0

    })
}
exports.postCHIdata = (req,res)=>{

    const numbers = req.body.arrayOfNumbers;

    const changed = numbers.map(str => parseInt(str, 10));

    const CHI = GetCHI(changed) ;


    res.render('home/CHI',{
        auth:  req.isAuthenticated(),
        CHI : CHI,
        pageTitle : 'operations' ,
        name : req.user.name
    })

}


    function getMeanValue(array){

        let sum = 0;

        for(let i=0 ; i<array.length ;i++){

            if(isNaN(array[i])){
                array[i] = 0;
                sum += array[i];
            }else{
                sum += array[i];
            }
        }

        // for(let i=0 ;i<array.length;i++){
            
        // }

        return sum/array.length ;

}

    function getSTD(array){

    var mean =  getMeanValue(array) ;
    var sumOfSquares = 0 ;

    for(let i=0 ;i<array.length;i++){

        sumOfSquares += Math.pow((array[i]-mean),2) ;

    }

    return Math.sqrt(sumOfSquares/array.length);

}

function GetSumOfArrayColumns(array,c,r){

    let sum =[] ;
    let counter = 1 ;
    let indexer = 0;
  
    for(let i =0; i<array.length ; i++){
       sum[indexer] += array[i] ;

       if(counter==r){
        indexer++ ;
       }
    }
    return sum ;
}

function GetCHI(Data){

    var mean = getMeanValue(Data);

    var CHI = 0 ;

    for(let i=0 ; i<Data.length ;i++){
        // CHI += (Data[i]-())
    }

}