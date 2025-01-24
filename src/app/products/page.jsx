// pages/products.js
import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import Navbar from "../components/nav";
const products = [
  {
    id: 1,
    name: "Eco-Friendly Reusable Water Bottle",
    description: "Made from sustainable materials, this bottle is perfect for reducing single-use plastic.",
    price: "₹1,599",
    image: "https://via.placeholder.com/300x200", // Replace with actual product image URL
    company: "Green Earth Co.",
  },
  {
    id: 2,
    name: "Bamboo Travel Mug",
    description: "A stylish and reusable coffee mug made from bamboo. Keeps beverages warm for hours.",
    price: "₹1,249",
    image: "https://via.placeholder.com/300x200", // Replace with actual product image URL
    company: "Sustainable Goods Inc.",
  },
  {
    id: 3,
    name: "Reusable Grocery Bags (Set of 5)",
    description: "Durable, foldable, and perfect for shopping while saving the planet from plastic waste.",
    price: "₹2,199",
    image: "https://via.placeholder.com/300x200", // Replace with actual product image URL
    company: "Eco Warriors Ltd.",
  },
  {
    id: 4,
    name: "Compostable Food Containers",
    description: "Biodegradable containers that are great for leftovers and meal prep.",
    price: "₹999",
    image: "https://via.placeholder.com/300x200", // Replace with actual product image URL
    company: "Planet-Friendly Packaging",
  },
];

export default function Products() {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#f5f5f5" }}>
        <Navbar />
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight="bold" color="green">
          Green Products Marketplace
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Discover eco-friendly alternatives for a sustainable lifestyle.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="green"
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
                  Company: {product.company}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": { backgroundColor: "darkgreen" },
                    mr: 2,
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "green",
                    color: "green",
                    "&:hover": { borderColor: "darkgreen", color: "darkgreen" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
