module.exports = function toReadable(number) {
    const decimal = (number) => {
        if (number === 0) return "zero";
        if (number === 1) return "one";
        if (number === 2) return "two";
        if (number === 3) return "three";
        if (number === 4) return "four";
        if (number === 5) return "five";
        if (number === 6) return "six";
        if (number === 7) return "seven";
        if (number === 8) return "eight";
        if (number === 9) return "nine";
        if (number === 10) return "ten";
    };

    const twenties = (number) => {
        if (number === 11) return "eleven";
        if (number === 12) return "twelve";
        if (number === 13) return "thirteen";
        if (number === 14) return "fourteen";
        if (number === 15) return "fifteen";
        if (number === 16) return "sixteen";
        if (number === 17) return "seventeen";
        if (number === 18) return "eighteen";
        if (number === 19) return "nineteen";
        if (number === 20) return "twenty";
    };

    const hundredths = (first, second) =>
        `${first} ${second > 0 ? decimal(second) : ""}`.trim();

    const thousandSecondPart = (number) => {
        if (number <= 10) return decimal(number);
        if (number <= 20 && number > 10) return twenties(number);
        if (number <= 99 && number > 20) return getHundredths(number);
    };

    const thousand = (first, second) =>
        `${first} hundred ${second === "zero" ? "" : second}`.trim();

    const getHundredths = (number) => {
        if (number <= 29 && number > 19) {
            return hundredths("twenty", number % 10);
        }
        if (number <= 39 && number > 29) {
            return hundredths("thirty", number % 10);
        }
        if (number <= 49 && number > 39) {
            return hundredths("forty", number % 10);
        }
        if (number <= 59 && number > 49) {
            return hundredths("fifty", number % 10);
        }
        if (number <= 69 && number > 59) {
            return hundredths("sixty", number % 10);
        }
        if (number <= 79 && number > 69) {
            return hundredths("seventy", number % 10);
        }
        if (number <= 89 && number > 79) {
            return hundredths("eighty", number % 10);
        }
        if (number <= 99 && number > 89) {
            return hundredths("ninety", number % 10);
        }

        if (number <= 99 && number > 89) {
            return hundredths("sixty", number % 10);
        }
    };

    const getThousand = (number) =>
        thousand(
            decimal(Math.floor(number / 100)),
            thousandSecondPart(number % 100)
        );

    if (number <= 10) return decimal(number);
    if (number <= 20 && number > 10) return twenties(number);
    if (number <= 99 && number > 20) return getHundredths(number);
    if (number <= 999 && number > 99) return getThousand(number);
};
