import {faker} from "@faker-js/faker";


export default Array.from({length:30}, (_, i)=>(
    { 
        id: i+1,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        gender: faker.person.gender(),
        jobTitle: faker.person.jobTitle(),
        jobDescriptor: faker.person.jobDescriptor(),
    }
))