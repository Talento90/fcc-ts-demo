export class Pet {
    private id: number;
    public name: string;
    public age: number;
    public type: string;

    constructor(id: number, name: string, age: number, type: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.type = type;
    }

    public getId(): number {
        return this.id;
    }
}