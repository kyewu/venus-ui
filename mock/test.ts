// test.ts

import type { MockMethod } from 'vite-plugin-mock'
import fs from 'fs'
import path from 'path'

export default [
  {
    url: '/api/image/:image',
    method: 'get',
    rawResponse: async (_req: any, res: any) => {
      console.log('req url:', _req.url)
      const imageName = _req.url.replace('/api/image/', '')
      const imagePath = path.resolve(__dirname, 'assets', imageName)

      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end('Error: Unable to read image file')
        } else {
          res.writeHead(200, { 'Content-Type': 'image/png' })
          res.end(data)
        }
      })
    }
  },
  {
    url: '/api/assets/:image',
    method: 'get',
    rawResponse: async (_req: any, res: any) => {
      const imageName = _req.url.replace('/api/assets/', '')
      const imagePath = path.join(__dirname, 'downloads', imageName)

      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain')
          res.end('Error: Unable to read image file.')
        } else {
          // 设置内容类型为 image/jpeg（或其他适当的类型）
          res.setHeader('Content-Type', 'image/jpeg')
          res.statusCode = 200
          res.end(data) // 将图片文件的二进制数据发送给客户端
        }
      })
    }
  }
] as MockMethod[]