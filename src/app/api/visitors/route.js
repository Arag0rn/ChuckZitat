'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  console.log("Starting GET request");

  try {
    const visitor = await prisma.visitor.findFirst();
    console.log("Visitor data retrieved:", visitor);

    if (!visitor) {
      const newVisitor = await prisma.visitor.create({ data: { visitCount: 1 } });
      console.log("New visitor created:", newVisitor);
      return new Response(JSON.stringify({ count: newVisitor.visitCount }), { status: 200 });
    } else {
      const updatedVisitor = await prisma.visitor.update({
        where: { id: visitor.id },
        data: { visitCount: visitor.visitCount + 1 },
      });
      console.log("Visitor count updated:", updatedVisitor);
      return new Response(JSON.stringify({ count: updatedVisitor.visitCount }), { status: 200 });
    }
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return new Response(JSON.stringify({ error: 'Failed to update visitor count' }), { status: 500 });
  }
}