// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//     console.log('give password as argument')
//     process.exit(1)
// }

// const password = process.argv[2]

// const url =
//     `mongodb+srv://fullastackOsa3:${password}@cluster0.hdqk0.mongodb.net/Osa3?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// const personSchema = new mongoose.Schema({
//     name: String,
//     number: String
// })

// const Person = mongoose.model('Person', personSchema)

// if (process.argv[3] === undefined) {
//     Person.find({}).then(result => {
//         console.log("phonebook")
//         result.forEach(person => {
//             console.log(person)
//         })
//         mongoose.connection.close()
//     })
// } else {
//     const person = new Person({
//         name: process.argv[3],
//         number: process.argv[4],
//     })

//     person.save().then(response => {
//         console.log(`Added ${person.name} number ${person.number} to phonebook`)
//         mongoose.connection.close()
//     })
// }



