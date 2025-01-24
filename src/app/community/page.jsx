// pages/community.js
'use client';
import Navbar from "../components/nav";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  TextField,
} from "@mui/material";

const discussions = [
  {
    id: 1,
    title: "How to encourage paper cup alternatives?",
    author: "Rohit Sharma",
    date: "Jan 20, 2025",
    message: "Looking for creative ideas to reduce paper cup usage in offices.",
    replies: 12,
  },
  {
    id: 2,
    title: "Reusable mugs vs disposable ones",
    author: "Priya Verma",
    date: "Jan 19, 2025",
    message:
      "What are your thoughts on bamboo mugs compared to metal reusable mugs?",
    replies: 8,
  },
  {
    id: 3,
    title: "Best eco-friendly products you've used",
    author: "Amit Gupta",
    date: "Jan 18, 2025",
    message: "Share your experience with sustainable products.",
    replies: 20,
  },
];

export default function Community() {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#f9f9f9" }}>


      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
      <Navbar />
        <Typography variant="h3" fontWeight="bold" color="green">
          Community Forum
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Join discussions, share your ideas, and collaborate on sustainability.
        </Typography>
      </Box>

      {/* Start a Discussion Section */}
      <Box
        sx={{
          mb: 5,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="green" mb={2}>
          Start a Discussion
        </Typography>
        <TextField
          fullWidth
          label="Discussion Title"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Write your message here..."
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            color: "white",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
        >
          Post Discussion
        </Button>
      </Box>

      {/* Ongoing Discussions */}
      <Typography variant="h4" fontWeight="bold" color="green" mb={3}>
        Ongoing Discussions
      </Typography>
      <Grid container spacing={3}>
        {discussions.map((discussion) => (
          <Grid item xs={12} md={6} key={discussion.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="green">
                  {discussion.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{ my: 1, fontStyle: "italic" }}
                >
                  By {discussion.author} on {discussion.date}
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  {discussion.message}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "green",
                    color: "green",
                    "&:hover": {
                      borderColor: "darkgreen",
                      color: "darkgreen",
                    },
                  }}
                >
                  View {discussion.replies} Replies
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>



      <div>
      <GroupChat />
    </div>

    </Box>
  );
}
import GroupChat from "./groupChat";

