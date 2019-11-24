function checkName(name){

    var letters = /^[A-Za-z]+$/;
    if(name.match(letters))
    {
    alert('Hieno nimi!');
    return true;
    }
    else
    {
    alert('Käytä vain kirjaimia.');
    return false;
    }

}
