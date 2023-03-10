interface Person {
    name: string;
    age: number;
    profession: string;
}

class classA implements Person { 
   foo: string;
   bar: number;
   name: string;
   age: number;
   profession: string;   
   lorem: string
}

class classB {

    sum = (x: number, y: number): number => {
        return x + y;
    }
   profession: string;      
}

class classC {

    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)

}