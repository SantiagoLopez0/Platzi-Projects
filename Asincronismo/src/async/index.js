const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}


console.log('Before:');
doSomething()
console.log('After');