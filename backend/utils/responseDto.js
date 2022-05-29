module.exports ={

    responseDtoJson : (err, value, res)=>{
        if(err){
            console.error("ERR :: ", err);
            return res.staus(500).send(err.message);
        }else{
            if (!value){
                console.error("ERR :: No Such Data" );
                return res.staus(404).send('No Such Data');
            }else{
                return res.staus(200).json(value);
            }
        }
    }

}