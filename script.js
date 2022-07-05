let counter=0;
let counterId=document.getElementById('counterId');

function setCounterValue(value)
{
    counterId.innerText=value;
    if(value===0)
    {
        counterId.style='color:black;';
    }
    else if(value>0)
    {
        counterId.style='color:green;';
    }
    else
    {
        counterId.style='color:red;';
    }
}

function decrease()
{
    counter--;
    setCounterValue(counter);
}

function reset()
{
    counter=0;
    setCounterValue(0);
}

function increase()
{
    counter++;
    setCounterValue(counter);
}