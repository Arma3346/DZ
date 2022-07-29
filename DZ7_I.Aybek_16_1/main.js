//OOP

// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const hatiko = new Dog(
//     80,
//     150,
//     'violet'
// )
// console.log(hatiko)
//
// // Наследование
//
// class animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type
//         this.gender = gender
//         this.color = color
//         this.voiceText = voiceText
//     }
// }
//
// class Cat extends animal {
//     constructor(type, gender, color, voiceText, name, purposeText) {
//         super(type, gender, color, voiceText);
//         this.name = name
//         this.purposeText = purposeText
//     }
// }
//
// const  Aybek = new Cat(
//     'domestic',
//     'male',
//     'blue',
//     'myaaau',
//     'Aybek',
//     'security'
// )

// console.log(Aybek)

// function animal(type, gender, color, voiceText, name, purposeText) {
//     console.log(type, gender, color, voiceText, name, purposeText)
// }
// animal('domestic', 'male', ' blue', 'myaaau', 'Aybek', 'security')



// ДЗ

class build {
    constructor(size, square, height, exits, room) {
        this.size = size
        this.square = square
        this.height = height
        this.exits = exits
        this.room = room
    }
}

class school extends build {
    constructor(weight, square, height, exits, room, desksNum, roomClr, people, teachers, laptops  ) {
        super(weight, square, height, exits, room);
        this.desksNum = desksNum
        this.roomClr = roomClr
        this.people = people
        this.teachers = teachers
        this.laptops = laptops
    }
}

const  school1 = new school(
    '120m',
    '520m^2',
    '4 floor',
    '4',
    '200',
    '200',
    'orange',
    '24',
    '1',
    '24',
)

console.log(school1)

class home extends build {
    constructor(size, square, height, exits, room, cupboard, windows, family, TV, PC) {
        super(size, square, height, exits, room);
        this.cupboard = cupboard
        this.windows = windows
        this.family = family
        this.TV = TV
        this.PC = PC
    }

}

const home1 = new home(
    '50m',
    '100m^2',
    '1 floor',
    '1',
    '5 rooms',
    '2 cupboard',
    '7',
    '7 people',
    '2 TVs',
    '1'
)
console.log(home1)