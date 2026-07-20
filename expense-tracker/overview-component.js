import React,{useState} from "react";
import styled from "styled-components";
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
font-family:sense-serif;
width:100%;
`;
const BalanceBox=styled.div`
font-size:15px;
display:flex;
width:100%;
font-weight:bold;
flex-direction :row;
justify-content:space-between;
align-items:center;
`;
const AddTransaction=styled.div`
background:black;
color:white;
padding:5x 10px;
text-align:center;
border-radius:4px;
cursor:pointer;
font-weigth:bold;
font-size:12px;

`;
const AddTransactionContainer=styled.div`
display:flex;
flex-direction :column;
border:1px solid #e6e8e9;
gap:10px;
padding:15px 20px;
margin: 20px;
width:100%;
& input{
  outline:none;
  padding:10px 12px;
  border:1px solid #e6e8e9;
}
`;
const RadioBox=styled.div`
display:flex;
flex-direction :row;
width;100%;
align-items;center;
& input{
  width:unset;
  margin:0 10px;
}

`;
const ADDTransactionView=()=>{
  const [amount,setAmount]=useState();
  const [desc,setDesc]=useState(); 
  const [type,setType]=useState("EXPENSE");
  const addTransaction=()=>{
    props.addTransaction({amount:Number(amount),desc,type,id:Date.now()});
    //console.log({amount,desc,type});
    props.toggleAddTxn()
  }
return (
  <AddTransactionContainer>
    <input placeholder="Amount"value={amount} onChange={(e)=>setAmount(e.target.value)}/>
    <input placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    <RadioBox>
     <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"}/>
     <label htmlFor="expense">Expense</label>
     <input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"} onChange={(e)=>setType(e.target.value)}/>
     <label htmlFor="income">Expense</label>
     
    </RadioBox>
    <AddTransaction onClick={addTransaction}>Add transaction </AddTransaction>
  </AddTransactionContainer>
);
};
const ExpenseContainer=styled.div`
display:flex;
flex-direction:row;
gap:12px;
margin:20px;
`;
const ExpenseBox=styled.div`
display:flex;
flex-direction:column;
border-radius:4px;
border:1px solid #e6e8e9;
padding :15px 20px; 
width:135px;
font-size:14px;
& span{
font-weight:bold;
font-size:20px;
color:${props=>props.isIncome? 'green':"red"};
}
`;
const  OverviewComponent=(props)=>{
  const [isADDTxnVisible,toggleAddTxn]=useState(true);
return(
  <Container> 
    <BalanceBox>
      Balance:$10000
      <AddTransaction onClick={()=>toggleAddTxn(!isADDTxnVisible)}>{isADDTxnVisible?"Cancel":"ADD"}</AddTransaction>
        </BalanceBox>
        {isADDTxnVisible && <ADDTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
        <ExpenseContainer>
<ExpenseBox isIncome={false}>
  Expense<span>$1000</span>
</ExpenseBox>
<ExpenseBox isIncome={true}>
  Income<span>$50000</span>
  </ExpenseBox>
          </ExpenseContainer>
        </Container>
);
};
export default OverviewComponent;
