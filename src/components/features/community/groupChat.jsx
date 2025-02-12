// components/groupChat.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Sample messages for the chat
const sampleMessages = [
  {
    id: 1,
    user: "Rohit Sharma",
    message: "Hey, anyone got ideas for our next sustainability event?",
    time: "Jan 25, 2025 at 3:00 PM",
  },
  {
    id: 2,
    user: "Priya Verma",
    message: "I think we should focus on reusable products this time!",
    time: "Jan 25, 2025 at 3:05 PM",
  },
  {
    id: 3,
    user: "Amit Gupta",
    message: "Sounds great! Let's collaborate with local brands.",
    time: "Jan 25, 2025 at 3:10 PM",
  },
];

export default function GroupChat() {
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      const messageObj = {
        id: messages.length + 1,
        user: "You", // Replace with user name if logged in
        message: newMessage,
        time: new Date().toLocaleString(),
      };
      setMessages([...messages, messageObj]);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight="bold" color="green">
          Group Chat
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Collaborate with the community and discuss sustainability ideas.
        </Typography>
      </Box>

      {/* Chat Area */}
      <Box
        sx={{
          height: "60vh",
          overflowY: "scroll",
          border: "1px solid #ddd",
          borderRadius: 2,
          backgroundColor: "white",
          p: 3,
        }}
      >
        <Grid container direction="column" spacing={2}>
          {messages.map((msg) => (
            <Grid item key={msg.id}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Avatar sx={{ marginRight: 2 }} />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight="bold" color="green">
                    {msg.user}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {msg.time}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {msg.message}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Message Input Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <TextField
          fullWidth
          label="Type your message..."
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{ mr: 2 }}
        />
        <IconButton
          color="primary"
          sx={{
            alignSelf: "center",
            backgroundColor: "green",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
