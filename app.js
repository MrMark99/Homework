const select = document.getElementById("select");
const allLang = ['ua','en','nd',];
const changeUrLang = ()=> {
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    changeLanguage();
}
select.addEventListener("change", changeUrLang);
const changeLanguage = ()=> {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        hash = 'ua' 
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['title'][hash];
    for(let key in langArr) {
        document.querySelector('.lang-'+key).innerHTML = langArr[key][hash];
    }
}
changeLanguage();