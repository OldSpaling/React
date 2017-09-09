class CommonUtility {
    constructor() { }
    static getRandomNum(min, max) {
        let Range = max - min;
        let Rand = Math.random();
        return (min + Math.round(Rand * Range));
    }
}
export default CommonUtility;