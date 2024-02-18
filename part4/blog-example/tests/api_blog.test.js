const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../src/app')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/blog')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
})

after(async () => {
  await mongoose.connection.close()
})