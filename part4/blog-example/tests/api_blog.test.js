const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../src/app')

const api = supertest(app)

test('blog list / GET - api/blog', async () => {
  await api
    .get('/api/blog')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
})

test('blog list / POST - api/blog', async () => {
    const bodyData = {
        title: '---------------',
        author: "21231",
        url: "daaaddddddddd",
        likes: 2323
    }

    await api
    .post('/api/blog')
    .send(bodyData)
    .expect(201)
    .expect('Content-Type', 'application/json; charset=utf-8')
})


after(async () => {
  await mongoose.connection.close()
})