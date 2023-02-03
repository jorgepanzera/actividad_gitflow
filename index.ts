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
}

class classB {

    sum = (x: number, y: number): number => {
        return x + y;
    }
}