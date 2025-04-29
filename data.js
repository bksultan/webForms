// data.js – Dummy data for users, products, orders
const users = [
  { username: "admin", password: "admin123", name: "Alice Admin", email: "admin@example.com", role: "admin" },
  { username: "john", password: "john123", name: "John Doe", email: "john@example.com", role: "user" },
  { username: "jane", password: "jane123", name: "Jane Doe", email: "jane@example.com", role: "user" },
  { username: "bob", password: "bob123", name: "Bob Smith", email: "bob@example.com", role: "user" },
  { username: "kate", password: "kate123", name: "Kate Johnson", email: "kate@example.com", role: "user" }
];
const products = [
  { id: 101, name: "Laptop", category: "Electronics", price: 999, description: "High-end laptop with 16GB RAM and 512GB SSD.", image: "https://via.placeholder.com/150?text=Laptop" },
  { id: 102, name: "Smartphone", category: "Electronics", price: 699, description: "Latest model smartphone with excellent camera.", image: "https://via.placeholder.com/150?text=Smartphone" },
  { id: 103, name: "Headphones", category: "Electronics", price: 199, description: "Noise-cancelling over-ear headphones.", image: "https://via.placeholder.com/150?text=Headphones" },
  { id: 104, name: "Coffee Maker", category: "Home Appliances", price: 49, description: "Automatic coffee maker with timer.", image: "https://via.placeholder.com/150?text=Coffee+Maker" },
  { id: 105, name: "T-shirt", category: "Clothing", price: 19, description: "100% cotton t-shirt, various sizes available.", image: "https://via.placeholder.com/150?text=T-shirt" },
  { id: 106, name: "Sneakers", category: "Footwear", price: 129, description: "Comfortable running sneakers.", image: "https://via.placeholder.com/150?text=Sneakers" }
];
const orders = [
  { id: 5001, user: "john", product: "Laptop", quantity: 1, date: "2025-03-10", status: "Delivered" },
  { id: 5002, user: "john", product: "T-shirt", quantity: 2, date: "2025-04-01", status: "Processing" },
  { id: 5003, user: "jane", product: "Coffee Maker", quantity: 1, date: "2025-04-05", status: "Shipped" },
  { id: 5004, user: "bob", product: "Smartphone", quantity: 1, date: "2025-04-08", status: "Delivered" },
  { id: 5005, user: "admin", product: "Laptop", quantity: 1, date: "2025-02-20", status: "Delivered" },
  { id: 5006, user: "kate", product: "Headphones", quantity: 1, date: "2025-04-10", status: "Delivered" }
];