module.exports = {
  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: 'localhost',
  //     user: 'postgres',
  //     password: 'postgres',
  //     database: 'cjs_store'
  //   }
  development: {
    client: 'pg',
    connection: 'postgresql://postgres:postgres@localhost/cjs_store'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
