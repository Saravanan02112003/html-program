function InsertElement() 

{
    var data=[10,20,30];
    var newpos=26;
    var position=1;
    for (let i = data.length-1;i>position;i--)
         {
        data[i]= data[i-1];
        

    }
    data[position]=newpos;
    console.log(data);
    
    
}
InsertElement();