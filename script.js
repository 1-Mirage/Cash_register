const BadInput=function()
{
    const rem=document.getElementsByClassName("hide");
    rem[0].classList.remove('hide');
}
const reverseBadInput=function()
{
    const rem=document.getElementsByClassName("hide");
    rem[0].classList.add('hide');
}
const calculate =function (e)
{
    e.preventDefault();
    const bill=billE.value;
    const casH=cash.value;
    if(casH===""||bill==="")
    BadInput();
    else
    {
        const billN=+bill;
        const casHN=+casH;
    console.log(billN);
    console.log(casHN);
    if(casHN<billN)
    BadInput();
    else
    {
     
    let billNum=casHN-billN;
    const denominations=[2000,500,100,20,10,5,1];
    const hash=new Map();
    let ind=0;
    while(billNum>=0&&ind<denominations.length)
    {
        hash.set(denominations[ind],parseInt(billNum/denominations[ind]));
        billNum%=denominations[ind];
        ind++;
    }
    ind=0;
    for (const [deno, valu] of hash)
    {
        let x=document.getElementById("notesTable").rows[0].cells;
        x[ind+1].innerHTML=valu;
        ind++;
    }
    billE.value="";
    cash.value="";
    

   }
}


    
}
const butn=document.getElementById("Click");
const billE = document.getElementById("cash");
const cash=document.getElementById("bil");

butn.addEventListener("click",calculate);

