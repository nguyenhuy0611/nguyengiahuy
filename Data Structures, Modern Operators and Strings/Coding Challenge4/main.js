const inputText = document.getElementById('inputText');
const convertButton = document.getElementById('convertButton');

function convertToCamelCase(str) {
    const words = str.split('_');

    const capitalizedWords = words.map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join('');
}

convertButton.addEventListener('click', () => {
    const inputValue = inputText.value;

    const lines = inputValue.split('\n');

    lines.forEach((line) => {
        const camelCaseName = convertToCamelCase(line);
        console.log(camelCaseName);
    });
});