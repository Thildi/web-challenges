import styled from "styled-components";
import StyledButton from "@/components/Button";

export default function ProductForm({ onSubmit, data, heading }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert die Standardaktion
    const formData = new FormData(event.target); // Holt die Formulardaten
    const productData = Object.fromEntries(formData); // Wandelt die Formulardaten in ein Objekt um
    onSubmit(productData); // Ruft die übergebene onSubmit-Funktion mit den neuen Daten auf
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={data?.name || ""} // Setzt den Default-Wert für Bearbeitung
          required // Füge required hinzu, um die Eingabe zu validieren
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={data?.description || ""} // Setzt den Default-Wert für Bearbeitung
          required
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          defaultValue={data?.price || 0} // Setzt den Default-Wert für Bearbeitung
          required
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select
          id="currency"
          name="currency"
          defaultValue={data?.currency || "EUR"} // Setzt den Default-Wert für Bearbeitung
        >
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
