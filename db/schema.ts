import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  category: text("category").notNull().default(""),
  description: text("description").notNull().default(""),
  priceCents: integer("price_cents").notNull(),
  imageKey: text("image_key").notNull(),
  sold: integer("sold", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default(""),
});
