import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        { id: "1", title: "Laptop", price: 50000 },
        { id: "2", title: "Phone", price: 30000 } 
    ])
}