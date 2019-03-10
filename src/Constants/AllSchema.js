// import Realm from 'realm';

// export const ADMIN_SCHEMA = "AdminSchema";
// export const USER_SCHEMA = "UserSchema";

// export const AdminSchema = {
//     name: ADMIN_SCHEMA,
//     properties: {
//         Auth: {
//             username: { type: 'string' },
//             password: { type: 'string' },
//             creationDate: { type: 'string' }
//         },
//         Fees: { type: 'fee[]' },
//         Users: { type: 'user[]' }
//     }
// }

// export const UserSchema = {
//     name: "UserSchema",
//     primaryKey: 'id',
//     properties: {
//         id: 'string',
//         name: { type: 'string' },
//         fatherName: { type: 'string' },
//         nickName: { type: 'string' },
//         address: { type: 'string' },
//         username: { type: 'string' },
//         password: { type: 'string' },
//         lanIP: { type: 'string' },
//         switcherName: { type: 'string' },
//         mobileNumber: { type: 'string' },
//         creationDate: { type: 'string' },
//         package: { type: 'string' },
//         fees: { type: 'string' },
//         feeHistory: { type: 'string' },
//         status: { type: 'bool' }
//     }
// }

// const databaseOptions = {
//     path: 'jobsapp.realm',
//     schema: [UserSchema],
//     schemaVersion: 0
// }

// //Functions

// export const insertNewUser = newUser => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         realm.write(() => {
//             realm.create(USER_SCHEMA, newUser);
//             resolve(newUser);
//         })
//     }).catch((error) => reject(error));
// })

// export const updateUser = user => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then((realm) => {
//         realm.write(() => {
//             let updateUser = realm.objectForPrimaryKey(USER_SCHEMA, user.id);
//             updateUser.name = user.name;
//             //many more.....
//             resolve();
//         })
//     }).catch((error) => reject(error));
// })

// export const queryAllUsers = allUsers => Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         let allUsers = realm.objects(USER_SCHEMA);
//         resolve(allUsers);
//     }).catch((error) => reject(error))
// })

// export default new Realm(databaseOptions);