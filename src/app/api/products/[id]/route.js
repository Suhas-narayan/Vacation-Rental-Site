import { connectDB } from "@/lib/db";
import Product from "@/models/product";

export async function GET(req, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  return Response.json(product);
}

export async function PUT(req, { params }) {
  await connectDB();
  const updatedProduct = await Product.findByIdAndUpdate(params.id, await req.json(), { new: true });
  return Response.json(updatedProduct);
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return new Response(null, { status: 204 });
}
