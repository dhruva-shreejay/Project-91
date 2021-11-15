player1 = localStorage.getItem("player1_name", player1);
player2 = localStorage.getItem("player2_name", player2);
document.getElementById("player1").innerText = "Player1: " + player1;
document.getElementById("player2").innerText = "Player2: " + player2; 
var player1score = 0;
document.getElementById("player1_score").innerText = "Score: " + player1score;
var player2score = 0;
document.getElementById("player2_score").innerText = "Score: " + player2score;
function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}