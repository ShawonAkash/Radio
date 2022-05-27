import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Akash',
    email: 'Akash@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'shawon',
    email: 'shawon@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
