export const revalidate = 60;  //ISR

async function getProduct() {
    const res = await fetch("http://localhost:3000/api/products");
    return res.json();
}

export default async function ProductPage () {
    const products = await getProduct();

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((p: any) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    )
}