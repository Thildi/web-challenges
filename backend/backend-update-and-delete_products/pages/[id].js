import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import Button from "@/components/Button";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(productData) {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate(); // Aktualisiert die Daten
      setIsEditMode(false); // Wechselt zurück in den Anzeigemodus
    } else {
      console.error(response.status);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      mutate();
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Produkt nicht gefunden</h1>;
  }

  return (
    <>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          data={data} // Übergeben der aktuellen Produktdaten zum Bearbeiten
          heading="Edit Product" // Setzt die Überschrift dynamisch
        />
      )}
      <br />
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <p>Reviews:</p>
        <div>
          {data.reviews.map((review, index) => (
            <div key={index}>
              {review.title}
              <br />
              {review.text}
              <br />
              {review.rating}⭐
              <hr />
            </div>
          ))}
        </div>
        <Button
          type="button"
          onClick={() => setIsEditMode(!isEditMode)} // Umschalten zwischen Editier- und Anzeigemodus
        >
          Edit
        </Button>
        <Button type="button" onClick={handleDeleteProduct}>
          Delete
        </Button>
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
    </>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
