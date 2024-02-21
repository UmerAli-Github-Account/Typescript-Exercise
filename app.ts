let personname :string = '';

personname = prompt('what is your name?') || '';

if(personname !== null && personname !== ''){
    alert(`Hello ${personname }, would you likento learn some python today?`)
}
else{
    alert('You have to fill your name')
}