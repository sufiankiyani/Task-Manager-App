// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-man'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error , client) => {
    if (error) {
        return console.log('unable to connect')
     }
     
     const db = client.db(databaseName)

     db.collection('users').deleteMany({
         age: 28
     }).then((res) => {
         console.log(res)
     }).catch((err) => {
         console.log(err)
     })

    //  db.collection('tasks').updateMany({
    //      status: true
    //  } , {
    //      $set: {
    //          status: false
    //      }
    //  }).then((result) => {
    //      console.log(result)
    //  }).catch((err) => {
    //      console.log(err)
    //  })

    // db.collection('users').updateOne({
    //      _id: new ObjectID("5d42166f7ae4351790a71db3")
    //     } , {
    //     $inc: {
    //         age: 1
    //     }
    //  }).then((result) => {
    //     console.log(result)
    //  }).catch ((error) => {
    //     console.log(error)
    //  })

    //  db.collection('users').findOne({ name: 'Kiyani'} , (error, name) => {
    //     console.log(name)
    //  }) 

    //  db.collection('users').insertOne({
    //      name: 'Kiyani' ,
    //      age: 32
    //  }, (error , result) => {
    //     if(error){
    //         return console.log('unable to insert')
    //     }

    //     console.log(result.ops)
    //  })

    // db.collection('users').insertMany([
    //     {
    //         name: 'jen' ,
    //         age: 28
    //     } , {
    //         name: 'Gunther' ,
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('error')
    //     }

    //     console.log(result.ops)
    // })


//     db.collection('tasks').insertMany([
//         {
//             description : 'first' ,
//             status: true
//         }, {
//             description : 'second' ,
//             status: false
//         }, {
//             description : 'third' ,
//             status: true
//         }
//     ] , (error, result) => {
//         if(error) {
//             return console.log(error)
//         }

//         console.log(result.ops)
//     })
})


