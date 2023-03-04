const {faker} = require("@faker-js/faker");

// Create random product
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: '$' + faker.commerce.price(),
        department: faker.commerce.department()
    }

    return newFake;
}

// Create random user
const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        // email: faker.internet.email(this.firstName, this.lastName),
        _id: faker.datatype.uuid()
    }
}

// Create random company
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(), 
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

module.exports = {
    createProduct,
    createUser,
    createCompany
}