import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    try {
      // Product-Daten aus request.body speichern
      const productData = request.body;

      // Neues Produkt in der Datenbank erstellen
      const newProduct = await Product.create(productData);

      // Erfolgreiche Antwort
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      // Fehler in der Konsole anzeigen
      console.error("Fehler beim Erstellen des Produkts:", error);

      // Fehlermeldung an den Client zurückgeben
      response.status(400).json({ error: error.message });
    }
    return;
  }

  // Antwort für nicht erlaubte Methoden
  response.status(405).json({ status: "Method not allowed." });
}
