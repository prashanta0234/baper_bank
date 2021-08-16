// take input function
function inputValue(input){
    // take input from input field
    let dipositInput=document.getElementById(input);
    let dipositValueText=dipositInput.value;
    let dipositValue=parseFloat(dipositValueText);
     // clear dipositInput value
     dipositInput.value='';
    return dipositValue;
    
}
// update  function
function updateValue(inputId,inputValue){
    // update  value
    let totalDiposit=document.getElementById(inputId);

    let mainTotalDipositBalance=parseFloat(totalDiposit.innerText)+inputValue;
    totalDiposit.innerText= mainTotalDipositBalance;
    return mainTotalDipositBalance;
    
}
function currentMoney(){
    let mainBalance=document.getElementById('main-balance');
    let balancetext=mainBalance.innerText;
    let totalMainBalance=parseFloat(balancetext);
    return totalMainBalance;
}
// main balance function
function totalMoney(dipositValue,add){
    let mainBalance=document.getElementById('main-balance');
    let  totalMainBalance= currentMoney();
    // diposit
    if(add==true){
        mainBalance.innerText=totalMainBalance+dipositValue;
    }
    // withdrow
    else{
        mainBalance.innerText=totalMainBalance-dipositValue;
    }

}
let depositButton=document.getElementById('diposit-button').addEventListener('click', function(){
    // get value
    let dipositValue=inputValue('diposit-input');
    // update value
    
    if(dipositValue>0){
        updateValue('diposit-balance',dipositValue);
    
    // total money
    totalMoney(dipositValue,true);

    }
})
// withdrow
let withdrowButton=document.getElementById('withdrow-button').addEventListener('click',function(){
    // get value
    let withdrowValue=inputValue('withdrow-input')
    let current=currentMoney();
    if(withdrowValue>0  && current>withdrowValue){
          // update value 
    updateValue('withdrow',withdrowValue);
    // total money
    totalMoney(withdrowValue,'main-balance',false);
    }

})