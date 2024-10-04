function* generatorFunction(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();

console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
console.log(gen.next().done);  // Output: true (no more values)


//-------------------------------------------------------------

// This will go on indefinitely
function* infiniteSequence(): Generator<number> {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gens = infiniteSequence();

console.log(gens.next().value);  // Output: 0
console.log(gens.next().value);  // Output: 1
console.log(gens.next().value);  // Output: 2

