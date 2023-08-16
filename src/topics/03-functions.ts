
function addNumbers(a: number, b: number): number {
    return a + b
}

const addNumberArrow =  (a: number, b: number): string => {
    return `${a + b} `;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// const result:number = addNumbers(1, 2);
// const result2:string = addNumberArrow(1, 2);
// const multiplyResult:number = multiply(5);

// console.log({result, result2, multiplyResult});

interface Character {
    name: string;
    hpPoints: number;
    skills: string[];
    homeTown?: string;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hpPoints += amount;
}

const strider: Character = {
    name: 'Strider',
    hpPoints: 50,
    skills: ['Bash', 'Counter'],
    homeTown: 'Rivendell',
    showHp() {
        console.log(`Heal Points: ${this.hpPoints}` );
    }
}

strider.showHp();

healCharacter(strider, 45);

strider.showHp();

export {};