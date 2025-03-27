import { connectDB } from "@/lib/db";
import Product from "../../../../models/product";



export async function GET() {
  await connectDB();

  try {
    const products = await Product.find();
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json(); // Parse JSON body

    const { name, description, price, images, availableDates } = body;

    if (!name || !description || !price || !images || !availableDates) {
      return Response.json({ error: "All fields are required!" }, { status: 400 });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      images,
      availableDates,
    });

    await newProduct.save(); // Save to MongoDB

    return Response.json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
