CREATE TABLE "user" (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR(20),
  "password" VARCHAR(20)
);

CREATE TABLE "workout" (
  "workout_id" SERIAL PRIMARY KEY,
  "exercise1_id" int NOT NULL,
  "exercise2_id" int NOT NULL,
  "exercise3_id" int NOT NULL,
  "exercise4_id" int NOT NULL,
  "user_id" int NOT NULL
);

CREATE TABLE "exercise1" (
  "exercise1_id" SERIAL PRIMARY KEY,
  "exercise1_name" VARCHAR(70),
  "exercise1_gifurl" VARCHAR(100)
);

CREATE TABLE "exercise2" (
  "exercise2_id" SERIAL PRIMARY KEY,
  "exercise2_name" VARCHAR(70),
  "exercise2_gifurl" VARCHAR(100)
);

CREATE TABLE "exercise3" (
  "exercise3_id" SERIAL PRIMARY KEY,
  "exercise3_name" VARCHAR(70),
  "exercise3_gifurl" VARCHAR(100)
);

CREATE TABLE "exercise4" (
  "exercise4_id" SERIAL PRIMARY KEY,
  "exercise4_name" VARCHAR(70),
  "exercise4_gifurl" VARCHAR(100)
);

ALTER TABLE "workout" ADD FOREIGN KEY ("exercise1_id") REFERENCES "exercise1" ("exercise1_id");

ALTER TABLE "workout" ADD FOREIGN KEY ("exercise2_id") REFERENCES "exercise2" ("exercise2_id");

ALTER TABLE "workout" ADD FOREIGN KEY ("exercise3_id") REFERENCES "exercise3" ("exercise3_id");

ALTER TABLE "workout" ADD FOREIGN KEY ("exercise4_id") REFERENCES "exercise4" ("exercise4_id");

ALTER TABLE "workout" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");
