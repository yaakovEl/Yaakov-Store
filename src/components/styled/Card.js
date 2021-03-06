
import styled from 'styled-components'

const StyledCard = styled.div`

box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding: 20px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
cursor: pointer;
border-radius: 5px;


img{
    width: 140px;
     height: 45%;
}

#title{
    font-size:16px;
    color:#5C548A;
}
#price{
    font-size:18px;
    font-weight:bold;
}

#btn{
    color:white;
    width:80%;
    padding: 10px 0px;
    cursor: pointer;
    font-size: 15px;
    background-color: #0247fe;
    border:none;
    border-radius: 3px;
    text-align:center;
    text-decoration:none;
}

&:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    #btn{
        display:block;
    }
}


@media only screen and (max-width:600px){
   width:100%
   margin:0;
   
}




`

export default StyledCard;