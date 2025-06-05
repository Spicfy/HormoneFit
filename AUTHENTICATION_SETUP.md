# HormoneF¡t Authentication System

This project includes a complete authentication system with login and registration functionality connected to a Node.js/Express backend with MongoDB.

## Features

✅ **Login Form** - User authentication with email and password  
✅ **Registration Form** - User registration with all required fields  
✅ **Form Validation** - Client-side validation using react-hook-form  
✅ **Error Handling** - Display error messages from backend  
✅ **Loading States** - Show loading indicators during requests  
✅ **Responsive Design** - Mobile-friendly UI with Tailwind CSS  
✅ **Dashboard** - Protected dashboard page after successful login  
✅ **Logout** - Secure logout functionality  

## File Structure

```
app/
├── components/
│   ├── LoginForm.tsx       # Login form component
│   └── RegisterForm.tsx    # Registration form component
├── auth/
│   └── page.tsx           # Authentication page (login/register)
├── dashboard/
│   └── page.tsx           # Protected dashboard page
└── page.tsx               # Landing page with links to auth

backend/
├── Controllers/
│   └── authController.js  # Authentication logic
├── routes/
│   └── authRoutes.js      # API endpoints
└── index.js               # Express server setup
```

## API Endpoints

The frontend connects to these backend endpoints:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login  
- `POST /api/auth/logout` - User logout

## Registration Fields

The registration form includes all fields required by the backend:

- **First Name** (required)
- **Last Name** (required)  
- **Email** (required, validated)
- **Password** (required, min 6 characters)
- **Confirm Password** (must match password)
- **Date of Birth** (required)
- **Gender** (required: male/female/other)

## How to Run

### 1. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```

The backend will run on `http://localhost:3000`

### 2. Start the Frontend

```bash
# In the root directory
npm install
npm run dev
```

The frontend will run on `http://localhost:3001` (or next available port)

### 3. Test the Authentication

1. Visit `http://localhost:3001`
2. Click "Get Started" or "Sign In" to go to `/auth`
3. Try registering a new user or logging in
4. After successful authentication, you'll be redirected to `/dashboard`
5. Use the logout button to sign out

## Frontend Features

### LoginForm Component
- Email and password validation
- Error display from backend
- Loading state during authentication
- Switch to registration form

### RegisterForm Component  
- All required fields with validation
- Password confirmation matching
- Date picker for birth date
- Gender selection dropdown
- Error handling and loading states

### Dashboard Page
- Welcome message after successful login
- Logout functionality
- Placeholder content for future features

## Backend Integration

The frontend uses axios to make HTTP requests to the backend with:

- `withCredentials: true` for cookie-based authentication
- Proper error handling for network and validation errors
- Loading states during API calls

## Styling

- **Tailwind CSS** for responsive, modern UI
- **Form styling** with focus states and validation errors
- **Gradient backgrounds** and card layouts
- **Button states** for disabled/loading conditions

## Next Steps

You can extend this authentication system by:

1. Adding email verification
2. Implementing password reset functionality  
3. Adding social media login (Google, Facebook)
4. Implementing protected routes middleware
5. Adding user profile management
6. Creating more dashboard features

## Environment Variables

Make sure your backend has the required environment variables:

```bash
# backend/.env
JWT_SECRET=your_jwt_secret_here
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
``` 