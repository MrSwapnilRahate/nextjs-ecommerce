// SSR used for dynamic, frequently changing data like price.
export const dynamic = "force-dynamic";

async function getProduct(id: string) {
    const res = await fetch(`https://localhost:3000/api/products/${id}`, {
        cache: "no-store",
    });
    return res.json();
}

export default async function ProductDetail({
    params,
} : {
    params: { id: string };
}) {
    const product = await getProduct(params.id);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Rs.{product.price}</p>
        </div>
    )
}