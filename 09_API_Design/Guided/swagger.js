import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Menu Makanan",
      version: "1.0.0",
      description:
        "Sebuah API sederhana tentang menu makanan yang kami sediakan",
    },
  },
  apis: ["app.js"],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
