import fastify from 'fastify'
import { knex } from './database'
// import crypto from 'node:crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  // Rota para testar o Knex
  // const tables = await knex('sqlite_schema').select('*')
  // return tables

  // Query para inserir dados
  // const transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transação de teste',
  //     amount: 1000,
  //   })
  //   .returning('*')

  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP serve running')
  })