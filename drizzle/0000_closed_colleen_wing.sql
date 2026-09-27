CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`price_cents` integer NOT NULL,
	`image_key` text NOT NULL,
	`sold` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT '' NOT NULL
);
