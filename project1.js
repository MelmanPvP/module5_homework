
const userInput = +prompt("Введите любое число:");

if( typeof (userInput) =="number")
{
    if(isNaN(userInput))
    {
        console.log('Упс, кажется, вы ошиблись')
    }
    else
    {
        const isEven = userInput % 2 == 0;
        if (isEven)
        {
            console.log('Число четное')
        }
        else
        {
            console.log('Число нечетное')
        }
    }
}
else
{
    console.log('Упс, кажется, вы ошиблись')
}
