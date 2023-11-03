import { Schema, model } from "mongoose";

const movieSchema = Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    trailer: { type: String, default: "No contamos con el trailer" },
    actors: { type: Array, default: "Los actores no estan disponibles" },
  },
  {
    timestamps: true,
  }
);

export const Movie = model("movie", movieSchema);
