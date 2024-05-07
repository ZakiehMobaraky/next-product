import { revalidateTag } from "next/cache";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
}

async function Shop() {
  const response = await fetch("http://localhost:8000/products", {
    cache: "no-cache",
    next: {
      tags: ["products"],
    },
  });

  const data: Product[] = await response.json();
  async function addProduct(e: FormData) {
    "use server";

    const title = e.get("title");
    const price = e.get("price");
    const newProduct = { title, price };

    await fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json",
      },
    });
    revalidateTag("products");
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          alt="next-pro"
          width={270}
          height={30}
          src={"/image/Discount-rafiki.png"}
        />
      </div>
      <form action={addProduct} className={styles.form}>
        <input placeholder="Title" name="title" type="text" />
        <input placeholder="Price" name="price" type="text" />
        <button>Add Product +</button>
      </form>

      <div className={styles.contentWrapper}>
        {data.map((item) => (
          <div key={item.id} className={styles.box}>
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Shop;
