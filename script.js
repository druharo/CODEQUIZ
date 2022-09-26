var quizTime = 80;
var totalScore = 0;
var highScore = 0;
let highInitials = "";

function loadPage(pageNo) {

// content for all the pages as arrays
    var content0 =
        `
        <center>
        <h1>Coding Quiz Challenge</h1>
        <p>Try to answer the following code-related questions within the time limit<p>
        <p>Keep in mind that incorrect penalize your score/time</p>
        <p>by ten seconds</p>

        <button onclick='startQuiz()'>Start Quiz</button>
        `;

    var content1 = `
        <h1>Commonly used data types DO Not include:</h1>
        <form>
            <section class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary" onclick="wrong(1)">1. quotes</button>
                <button type="button" class="btn btn-primary" onclick="wrong(1)">2. curly brackets</button>
                <button type="button" class="btn btn-primary" onclick="wrong(1)">3. parenthesis</button>
                <button type="button" class="btn btn-primary" onclick="right(1)">4. square brackets</button>
            </section>
        </form>
        `;

    var content2 = `
        <h1>The condition in an if/else statement is enclosed with ________.</h1>
        <form>
            <section class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary" onclick="wrong(2)">1. quotes</button>
                <button type="button" class="btn btn-primary" onclick="right(2)">2. curly brackets</button>
                <button type="button" class="btn btn-primary" onclick="wrong(2)">3. parenthesis</button>
                <button type="button" class="btn btn-primary" onclick="wrong(2)">4. square brackets</button>
            </section>
        </form>
    `;

    var content3 = `
        <h1>Arrays in Javascript can be used to store _________.</h1>
        <form>
            <section class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary" onclick="wrong(3)">1. numbers and strings</button>
                <button type="button" class="btn btn-primary" onclick="wrong(3)">2. other arrays</button>
                <button type="button" class="btn btn-primary" onclick="wrong(3)">3. booleans</button>
                <button type="button" class="btn btn-primary" onclick="right(3)">4. all of the above</button>
            </section>
        </form>
    `;

    var content4 = `
        <h1>String values must be closed within ___________ when being assigned to variables.</h1>
            <form>
                <section class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-primary" onclick="wrong(4)">1. commas</button>
                    <button type="button" class="btn btn-primary" onclick="wrong(4)">2. curly brackets</button>
                    <button type="button" class="btn btn-primary" onclick="wrong(4)">3. quotes</button>
                    <button type="button" class="btn btn-primary" onclick="right(4)">4. parenthesis</button>
                </section>
            </form >
    `;

    var content5 = `
        <h1>A Very useful tool used during development and debugging is printing content to the debugger is:</h1>
        <form>
            <section class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary" onclick="wrong(5)">1. Javascript</button>
                <button type="button" class="btn btn-primary" onclick="wrong(5)">2. Terminal/bash</button>
                <button type="button" class="btn btn-primary" onclick="wrong(5)">3. for loops</button>
                <button type="button" class="btn btn-primary" onclick="right(5)">4. console log</button>
            </section>
        </form >
    `;
  // section to input final score
    var content6 = `
        <h1>All Done</h1>
        <div>Your final score is: ${totalScore}<div>
        <form>
        <div>
            Enter Initials
            <input type="text" id="initials"></input>
            <button type="button" class="btn btn-primary" onclick="storeHigh(6)">Submit</button>
        </div>
        </form>
    `;
// high score content output, go back and submit pages
    var content7 = `
        <h1>High Scores</h1>
        ${highInitials}: ${highScore}
        <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-primary" onclick="goBack()";>Go back</button>
            <button type="button" class="btn btn-primary" onclick="clearHighScores()">Clear High Score</button>
        </div>
    `;

    var content = [content0, content1, content2, content3, content4, content5, content6, content7];

    $('.content').html(content[pageNo]);
}

function storeHigh(pageNo) {
    var initials = $('#initials').val();
    $('#wrongRight').html('');
    highInitials = initials;
    loadPage(pageNo + 1);
}
// clearing High scores to restart
function clearHighScores() {
    highInitials = "";
    highScore = 0;
    goBack();
}

function wrong(pageNo) {
    quizTime = quizTime - 10;
    $('#wrongRight').html('<h1><i>Wrong!</i></h1>');
    loadPage(pageNo + 1);
}

function right(pageNo) {
    $('#wrongRight').html('<h1><i>Correct!</i></h1>');
    totalScore = totalScore + 10;

    if (totalScore > highScore) {
        highScore = totalScore;
    }

    loadPage(pageNo + 1);
}
// clock function

function startClock() {
    setInterval(function () {
        quizTime = quizTime - 1;
        $('#time').html(quizTime);
    }, 1000);
}
// start the clock
function startQuiz() {
    startClock();

    // load page
    loadPage(1);
}
// restarting the process
function goBack() {
    $('#wrongRight').html('');
    loadPage(0);
}
// load page to start process
loadPage(0);