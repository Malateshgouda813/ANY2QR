# 🚀 ANY2QR – Convert Anything to QR Code

ANY2QR is a full-stack web application that allows users to generate QR codes for multiple types of data such as UPI payments, text, email, phone numbers, URLs, WiFi,  and more. The generated QR data is stored in a cloud database for history tracking and providing download QR Code as Image option as well.



## 🌐 Live Demo

* 🔗 Frontend: https://any2qr-123.onrender.com
* 🔗 Backend: https://any2qr.onrender.com

## Screenshots 


## 🛠️ Tech Stack

### Frontend

* React.js
* CSS (Custom styling)
* React Router
* QRCode.react

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas (Cloud Database)

### Deployment

* Render (Frontend + Backend)

  

## ✨ Features

* ✅ Generate QR codes for multiple data types
* ✅ Save QR data to MongoDB Atlas
* ✅ View QR history
* ✅ Responsive UI
* ✅ Real-time API integration
* ✅ Download QR image option



## 📁 Project Structure

```
client/
  ├── src/
  │   ├── components/
  │   │   ├── EmailQR.jsx
  │   │   ├── EventQR.jsx
  │   │   ├── ImageQR.jsx
  │   │   ├── LocationQR.jsx
  │   │   ├── PhoneQR.jsx
  │   │   ├── SmsQR.jsx
  │   │   ├── SocialQR.jsx
  │   │   ├── TextQR.jsx
  │   │   ├── UpiQR.jsx
  │   │   ├── UrlQR.jsx
  │   │   ├── VCardQR.jsx
  │   │   ├── WifiQR.jsx
  │   │   └── TextQR.css
  │   ├── config.js
  │   └── App.js
server/
  ├── config/db.js
  ├── server.js
```



## 📌 QR Types Supported

| Type     | Description        |
| -------- | ------------------ |
| Text     | Simple text to QR  |
| Email    | Email address QR   |
| Phone    | Call QR            |
| SMS      | Message QR         |
| URL      | Website link QR    |
| WiFi     | Connect to WiFi    |
| UPI      | Payment QR         |
| Location | Google Maps QR     |
| Event    | Calendar event QR  |
| VCard    | Contact sharing QR |
| Social   | Social media links |
| Image    | Image link QR      |



## ⚙️ Installation & Setup

### 🔹 Clone Repository

```bash
git clone https://github.com/Malateshgouda813/ANY2QR.git
cd ANY2QR
```
### 🔹 Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run server:

```bash
node server.js
```

---

### 🔹 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🔗 API Endpoints

### Save QR Data

```
POST /save-qr
```

### Get QR History

```
GET /qr-history
```

---

## 🧪 Example API Request

```json
POST /save-qr
{
  "text": "mailto:test@gmail.com"
}
```

---

## 🚀 Deployment

### Backend

* Hosted on Render
* Uses environment variables for MongoDB connection

### Frontend

* Deployed as static site on Render
* Connected to backend API

---

## 🔒 Environment Variables

```
MONGO_URI=your_connection_string
REACT_APP_API_URL=https://your-backend-url
```

---

## 💡 Future Enhancements


* 🧑 User Authentication
* 🗑️ Delete QR History
* 🎨 Improved UI/UX
* 📱 Mobile Optimization

---

## 👨‍💻 Author

**Malatesh Gouda R H**

---


## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
