const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../src/app')
const assert = require('node:assert')

const api = supertest(app)

test('blog list / GET - api/blog', async () => {
  await api
    .get('/api/blog')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
})

test('blog create / POST - api/blog', async () => {
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


test('blog create BadData / POST - api/blog', async () => {
    const bodyData = {}

    await api
    .post('/api/blog')
    .send(bodyData)
    .expect(422)
    .expect('Content-Type', 'application/json; charset=utf-8')
})


test('Verify likes working / GET - api/blog', async () => {
    const bodyData = {}
    const id = "65ce536bc1631862800d8261"
    const res = await api
    .get(`/api/blog/${id}`)
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    

    assert(res.body.likes != undefined)
})



after(async () => {
  await mongoose.connection.close()
})