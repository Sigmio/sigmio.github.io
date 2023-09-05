function golink(obj, link){
    var elementtoscroll = document.getElementById(link);
    elementtoscroll.scrollIntoView();

    var activelink = document.getElementsByClassName('active');
    activelink[0].classList.remove('active');

    var obj = document.getElementById(obj);
    obj.parentNode.classList.add('active');

    navigation.close();

}