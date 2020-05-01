const possibleColors = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#ea4c88',
    '#8e44ad',
    '#f1c40f',
    '#e74c3c'
];

module.exports = (invalidColor = '') => {
    const colors = possibleColors.filter(color => color !== invalidColor);
    return colors[Math.floor(Math.random() * colors.length)];
};