function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not of age to vote":"You can vote"
    document.getElementById("Vote").innerHTML = Can_vote
}