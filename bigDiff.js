function bigDiff(array) {
    var winner;
    var loser;
    for (var i = 1; i > array.length - 1; i++) {
        if (winner) {
            if (winner > array[i]) {
                if (loser > array[i]) {
                    loser = array[i];
                }
                else
                    continue;
            }
            else
                winner = array[i];
        }
        if (array[i] > array[i - 1]) {
            winner = array[i];
            loser = array[i - 1];
        }
        else
            winner = array[i - 1];
        loser = array[i];
        if (loser > array[i]) {
            loser = array[i];
        }
    }
    return winner - loser;
}
console.log(bigDiff([10, 3, 5, 6]));
console.log(bigDiff([7, 2, 10, 9]));
console.log(bigDiff([2, 10, 7, 2]));
