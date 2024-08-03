const UniqueString = (strings) => {
    return strings.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
};

// Example Usage
const strings = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"];
const result = UniqueString(strings);
console.log(result); // Output: { apple: 3, banana: 2, orange: 1, pear: 1 }



const ProductOfMultipleOfThreeOrFive = (numbers) => {
    return numbers.reduce((sum, num) => {
        if (num % 3 === 0 || num % 5 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
};

// Example Usage
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
const result = ProductOfMultipleOfThreeOrFive(numbers);
console.log(result); // Output: 18171




const palindromesString = (words) => {
    return words.filter(word => {
        const cleaned = word.toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    });
};

// Example Usage
const words = ["racecar", "hello", "deified", "world", "Level", "programming", "radar", "civic", "javascript"];
const result = palindromesString(words);
console.log(result); // Output: ["racecar", "deified", "level", "radar", "civic"]



const filterFilePaths = (filePaths) => {
    return filePaths.filter(path => /\.(png|jpg)$/i.test(path));
};

// Example Usage
const filePaths = [
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg"
];
const result = filterFilePaths(filePaths);
console.log(result); // Output: ["/assets/img/logo.png", "/downloads/image.png", "/downloads/image.jpg"]



const swapStrings = (strings) => {
    return strings.map(str => {
        if (str.length > 1) {
            const firstChar = str.charAt(0);
            const lastChar = str.charAt(str.length - 1);
            return lastChar + str.slice(1, -1) + firstChar;
        }
        return str; // Return unchanged if the string length is 1
    });
};

// Example Usage
const string = ["world", "this", "is", "an", "example", "array", "of", "strings"];
const result = swapStrings(strings);
console.log(result); // Output: ["dorlw", "siht", "sI", "na", "example", "yrara", "fo", "sgnirts"]



const sumOfSquaresOfOddNumbers = (numbers) => {
    return numbers
        .filter(num => num % 2 !== 0)      // Keep only odd numbers
        .map(num => num * num)             // Square each number
        .reduce((sum, square) => sum + square, 0); // Sum up the squares
};

// Example Usage
const number = [1, 2, 3, 4, 5, 7];
const result = sumOfSquaresOfOddNumbers(numbers);
console.log(result); // Output: 84



const massageArray = (inputArray) => {
    const typeOfCourse = [
        { id: 1, name: "Developer" },
        { id: 2, name: "Tester" }
    ];
    const CourseDurationDirectory = {
        1: "6 month",
        2: "1 year",
        3: "2 year"
    };
    const Category = {
        3: "Fullstack",
        4: "manual tester",
        5: "automation tester"
    };

    return inputArray.map(item => {
        return {
            courseName: item.courseName,
            courseDuration: CourseDurationDirectory[item.courseDuration],
            Category: Category[item.Category],
            type: typeOfCourse[item.type].name,
            techTools: Object.keys(item.techTools).filter(key => item.techTools[key] && item.techTools[key] !== '').map(key => ({
                language: item.techTools[key],
                details: item.techdetails[key] || ''
            }))
        };
    });
};

// Example Usage
const exampleInputArray = [
    {
        courseName: "masai frontend web26",
        courseDuration: 2,
        Category: 3,
        type: 1,
        techTools: {
            1: "HTML",
            2: "CSS",
            3: "javaScript",
            4: "React",
            5: "Redux",
            6: "Node.js",
            7: "Express",
            8: "MongoDB",
            9: "Bootstrap",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: null,
            17: null,
            18: null,
            19: null,
            20: null
        },
        techdetails: {
            1: "HTML is the standard markup language for Web pages.",
            2: "CSS is the language we use to style an HTML document.",
            3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
            4: "React is a JavaScript library for building user interfaces.",
            5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
            6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
            7: "Express is a minimal and flexible Node.js web application framework.",
            8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
            9: "Bootstrap utilizes Sass for a modular and customizable architecture.",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: null,
            17: null,
            18: null,
            19: null,
            20: null
        }
    },
    {
        courseName: "foundation batch",
        courseDuration: 2,
        Category: 4,
        type: 2,
        techTools: {
            1: "aptitude",
            2: "GitHub",
            3: "C",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: null,
            17: null,
            18: null,
            19: null,
            20: null
        },
        techdetails: {
            1: "1. a natural ability or skill: 2. a natural ability or skill:",
            2: "The open source community is the heart of GitHub. It is where ideas grow and people come together to build."
        }
    }
];

const results = massageArray(exampleInputArray);
console.log(result);
