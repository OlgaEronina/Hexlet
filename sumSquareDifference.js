const sumSquareDifference = (n) => {
    const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    const squareOfSum = ((n * (n + 1)) / 2) ** 2;
    const sumDifference = squareOfSum - sumOfSquares;
    return sumDifference;
};