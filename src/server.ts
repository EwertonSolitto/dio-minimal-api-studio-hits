import fastify from "fastify";
import { getData } from "./data/get-data";

const server = fastify()

server.get('/hits', async (req, res) => {
  const data = await getData('hits')

  return JSON.stringify(data)
})

server.get('/studios', async (req, res) => {
  const data = await getData('studios')

  return JSON.stringify(data)
})

interface DriverParams {
  id: number;
}

server.get<{ Params: DriverParams}>('/studios/:id', async (req, res) => {
  const data = await getData('studios')

  const filteredData = data.find(obj => obj.id ?? parseInt(req.params.id) === obj.id)

  return JSON.stringify(filteredData)
})

try {
  await server.listen({ port: 3000 })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}