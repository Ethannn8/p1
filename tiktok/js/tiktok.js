function magicAlgorithm(likeCounts, comment, shares, follows) {
    let rank = 0;

    if (likeCounts >= 10000 && comment.includes("pancake") && shares >= 1000 && follows >= 100) {
        rank = 1;
    } else if (likeCounts >= 500 && comment.includes("waffle") && shares >= 500 && follows >= 50) {
        rank = 100;
    } else {
        rank = 1000;
    }

    return rank
}

function popup() {
    alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
    let likeCount = Number(prompt("How many likes did this tiktok video get?"));
    let comment = prompt("What is the most recent comment on this Tiktok");
    let numShares = Number(prompt("How many shares did this video get?"));
    let numFollows = prompt(("How many follows did this video get?"));
    alert("the ranking for this tiktok video is " + magicAlgorithm(likeCount, comment, numShares, numFollows));
}


function showUI() {
    let likeCounts = Number(document.getElementById("like-textbox").value);
    let comment = document.getElementById("comment-textbox").value;
    let shares = Number(document.getElementById("shares-textbox").value);
    let follows = Number(document.getElementById("follows-textbox").value);

    let rankResult = magicAlgorithm(likeCounts, comment, shares, follows);

    document.getElementById("result-paragraph").innerHTML = "Tiktok Rank: " + rankResult;
}
showUI();