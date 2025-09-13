import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello Cloud ☁️, Tatiana Fernandez Pineda y Santiago Garzon Silva",
        docs: ["/health", "/version"]
    });
});

app.get("/health", (req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/version", (req, res) => {
    res.json({ name: "hello-cloud", version: "1.0.0" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Export the app for testing purposes