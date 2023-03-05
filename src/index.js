module.exports = function toReadable(n) {
    const decimes = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    for (i = 20; i < 100; i++) {
        if ((n) => 20 && n <= 99) {
            if (n <= 20) return decimes[n];

            if (n > 20 && n <= 29) return `twenty ${decimes[n.toString()[1]]}`;

            if (n >= 30 && n <= 39)
                return n === 30
                    ? "thirty"
                    : `thirty ${decimes[n.toString()[1]]}`;

            if (n >= 40 && n <= 49)
                return n === 40 ? "forty" : `forty ${decimes[n.toString()[1]]}`;

            if (n >= 50 && n <= 59)
                return n === 50 ? "fifty" : `fifty ${decimes[n.toString()[1]]}`;

            if (n >= 60 && n <= 69)
                return n === 60 ? "sixty" : `sixty ${decimes[n.toString()[1]]}`;

            if (n >= 70 && n <= 79)
                return n === 70
                    ? "seventy"
                    : `seventy ${decimes[n.toString()[1]]}`;

            if (n >= 80 && n <= 89)
                return n === 80
                    ? "eighty"
                    : `eighty ${decimes[n.toString()[1]]}`;

            if (n >= 90 && n <= 99) {
                return n === 90
                    ? "ninety"
                    : `ninety ${decimes[n.toString()[1]]}`;
            }
        }
    }

    for (i = 100; i < 200; i++) {
        if (n >= 100 && n <= 109)
            return n === 100 ? "one hundred" : `one hundred ${decimes}`;
        if (n >= 120 && n <= 129)
            return n === 120
                ? "one hundred twenty"
                : `one hundred ${decimes[n.toString()[2]]}`;
        if (n >= 130 && n <= 139)
            return n === 130
                ? "one hundred thirty"
                : `one hundred thirty ${decimes[n.toString()[2]]}`;

        if (n >= 140 && n <= 149)
            return n === 140
                ? "one hundred forty"
                : `one hundred forty ${decimes[n.toString()[2]]}`;

        if (n >= 150 && n <= 159)
            return n === 150
                ? "one hundred fifty"
                : `one hundred fifty ${decimes[n.toString()[2]]}`;

        if (n >= 160 && n <= 169)
            return n === 160
                ? "one hundred sixty"
                : `one hundred sixty ${decimes[n.toString()[2]]}`;

        if (n >= 170 && n <= 179)
            return n === 170
                ? "one hundred seventy"
                : `one hundred seventy ${decimes[n.toString()[2]]}`;

        if (n >= 180 && n <= 189)
            return n === 180
                ? "one hundred eighty"
                : `one hundred eighty ${decimes[n.toString()[2]]}`;

        if (n >= 190 && n <= 199) {
            return n === 190
                ? "one hundred ninety"
                : `one hundred ninety ${decimes[n.toString()[2]]}`;
        }
    }
};
