/**
 * Created by dimwe on 27-2-2016.
 */

    //After the window is complete with loading, use function questionMark
    window.addEventListener('load', questionMark);

    //Get element to load the image questionMark
    var getElementQuestionMark = document.getElementsByTagName('figure');

    //Set in every figure the image questionMark.jpg
    function questionMark()
    {
        for(var i = 0; i < getElementQuestionMark.length; i++)
        {
            getElementQuestionMark[i].innerHTML = "<img src='images/questionMark.jpg'>";
        }
    }

    var button = document.getElementById('submit');
    button.addEventListener('click', clickTreasure);

    //Function for guess the treasure
    function clickTreasure()
    {
        //Get element form by id
        v = document.getElementById('number').value;
        v -= 1;
        //Get element popUp for warnings
        var popUp = document.getElementById('popUp');

        //Settings warning
        var fail = "Probeer het nog eens!";
        var success = "Gefeliciteerd! Je hebt het goed geraden.";

        for(var i = 0; i < getElementQuestionMark.length; i++)
        {
            if(v == getElementQuestionMark[i])
            {
                getElementQuestionMark[i].innerHTML = "<img src='images/empty.jpg'>";
                popUp.removeClass('green');
                popUp.innerHTML = fail;
                popUp.addClass('red');
            }
            else if(v == getElementQuestionMark[i])
            {
                getElementQuestionMark[i].innerHTML = "<img src='images/chest.jpg'>";
                popUp.removeClass('red');
                popUp.innerHTML = success;
                popUp.addClass('green');
            }
        }
    }