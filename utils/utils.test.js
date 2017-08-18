const expect = require("expect");

const utils = require("./utils");

/*
it("should expect some values", () => {
    //expect(12).toNotBe(11);
    //expect({name: "Romina"}).toBe({name: "Romina"}); //toBe fails when tries to compare two objects, use toEqual for this case
    //expect({name: "Romina"}).toEqual({name: "Romina"});
    //expect([2,3,4]).toInclude(2);
    //expect([2,3,4]).toExclude(1);

    expect({
        name: "Romina",
        age: 3,
        location: "Mexico City"
    }).toInclude({
        age: 3
    });

    expect({
        name: "Romina",
        age: 3,
        location: "Mexico City"
    }).toExclude({
        age: 2
    });
});
*/

describe("Utils", () => {

    describe("#Add methods", () => {
        it("should add two numbers", () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA("number");
        });
    
        it("should async add two numbers", (done) => {
            utils.asyncAdd(3, 3, (sum) => {
                expect(sum).toBe(6).toBeA("number");
                done();
            });
        });
    });

    it("should square a number", () => {
        var res = utils.square(3);
    
        expect(res).toBe(9).toBeA("number");
    });
    
    it("should async square a number", (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA("number");
            done();
        });
    });
});

it("should set firstName and lastName", () => {
    var user = {
        age: 30,
        location: "Mexico City"
    };
    var fullName = "Jessica Zuniga";

    user = utils.setName(user, fullName);
    var names = fullName.split(" ");

    expect(user).toBeA("object");
    expect(user).toInclude({
        firstName: names[0],
        lastName: names[1]
    });
});
