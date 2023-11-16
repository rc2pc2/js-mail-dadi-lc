const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function(){
    const userRandomNumber = Math.floor( Math.random() * 6 ) + 1;
    const pcRandomNumber = Math.floor( Math.random() * 6 ) + 1;

    console.log(userRandomNumber, pcRandomNumber);

    if (userRandomNumber > pcRandomNumber){
        console.log('User wins');
    } else if ( pcRandomNumber > userRandomNumber){
        console.log('AI wins');
    } else {
        console.log('No one wins');
    }
});