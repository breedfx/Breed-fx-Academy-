body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #101820;
    color: white;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a1a1a;
    padding: 20px 40px;
}

.logo img {
    width: 120px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
}

nav ul li a {
    text-decoration: none;
    color: gold;
    font-weight: 600;
}

.hero {
    height: 90vh;
    background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
}

.hero-content {
    max-width: 600px;
    background: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;
    animation: fadeIn 2s ease-in;
}

.hero-content h1 {
    font-size: 2.5rem;
    color: gold;
}

.hero-content span {
    color: #00ffae;
}

.hero-content p {
    margin-top: 10px;
    font-size: 1.1rem;
    color: #e0e0e0;
}

.cta-button {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    background-color: gold;
    color: #000;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #ffd700;
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}