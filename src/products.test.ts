import request from "supertest"
import {app} from "./app"

describe ("products", ()=>{
    it("schould list products", async ()=>{
        const response = await request(app).get("/products")
        
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBeGreaterThan(0)
        
    })
})