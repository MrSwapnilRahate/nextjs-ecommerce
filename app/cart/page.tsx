// Used CSR for highly interactive cart flows.
"use client";

import { useState } from "react";

export default function CartPage() {
    const [count, setCount] = useState(1);

    return (
        <div>
            <h2>Cart</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <span>{count}</span>
        </div>
    )
}