class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        return `${this.name}是搬砖的，搬了${this.age}年了`;
    }
}
export default Person;
