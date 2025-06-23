// clear-db.ts
import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    // Delete from child → parent to avoid foreign key constraint errors
    await prisma.blog.deleteMany();
    await prisma.user.deleteMany();
    // Add other models here
    console.log("✅ Database cleared.");
  } catch (err) {
    console.error("❌ Failed to clear DB:", err);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase();
