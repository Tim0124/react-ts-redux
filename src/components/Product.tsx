type ProductProps = {
  id: string
  image: string
  title: string
  price: number
  description: string
}

export default function Product({ image, title, price, description }: ProductProps) {

  function handleAddCart() {}

  return (
    <article>
      <img src={image} alt="" />
      <div>
        <div>
          <h3>{title}</h3>
          <p className="product-price">{price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  )
}