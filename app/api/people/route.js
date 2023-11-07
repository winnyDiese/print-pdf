const { NextResponse } = require("next/server")

export const GET = async (Request)=>{
    return NextResponse.json([
        {
            name: "Kane William",
            age: 31,
            contry: "New Zealand"
        },
        {
            name: "Rose Taylor",
            age: 29,
            contry: "New Zealand"
        },
        {
            name: "Tom Lathem ",
            age: 31,
            contry: "New Zealand"
        },
        {
            name: "Devon colman ",
            age: 32,
            contry: "New Zealand"
        },
        {
            name: "Kane Masudi",
            age: 31,
            contry: "New Zealand"
        },
        
    ])
}

