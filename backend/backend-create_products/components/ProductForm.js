import styled from "styled-components";
import StyledButton from "@/components/Button";
import useSWR from "swr";

export default function ProductForm() {
  // SWR Hook zur Datenabfrage:
  const { data, isLoading, mutate } = useSWR("/api/products");

  // Asynchrone Funktion zur Formularverarbeitung
  async function handleSubmit(event) {
    event.preventDefault();

    // Erstellen eines FormData-Objekts, um Formulareingaben zu sammeln
    const formData = new FormData(event.target);
    // Konvertierung von FormData in ein normales Objekt
    const productData = Object.fromEntries(formData);

    // Daten an die API senden
    const response = await fetch("/api/products", {
      method: "POST", // POST-Methode zum Erstellen eines neuen Produkts
      headers: {
        "Content-Type": "application/json", // Daten als JSON senden
      },
      body: JSON.stringify(productData), // Formulardaten als JSON-String in den Request-Body einfügen
    });

    if (response.ok) {
      mutate(); // Aktualisiert die Produktliste über SWR
      event.target.reset();
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>

      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>

      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>

      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>

      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
