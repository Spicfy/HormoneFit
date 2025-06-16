export const generateVericationEmailHTML =({
    first_name,
    last_name,
    email,
    verification_url
}) => {
    return 
 `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - HormoneFit</title>
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f9fa;
        }
        
        /* Container */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        /* Header with gradient */
        .header {
            background: linear-gradient(135deg, #ff6b9d, #c44fb8);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .logo-section {
            margin-bottom: 20px;
        }
        
        .logo-placeholder {
            width: 60px;
            height: 60px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        /* Main content */
        .content {
            padding: 50px 30px;
            text-align: center;
        }
        
        .welcome-text {
            font-size: 22px;
            font-weight: 600;
            color: #333;
            margin-bottom: 20px;
        }
        
        .description {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
            margin-bottom: 40px;
        }
        
        /* Verification button */
        .verify-button {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b9d, #c44fb8);
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 30px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        }
        
        .verify-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
        }
        
        /* Alternative link section */
        .alternative-section {
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
        }
        
        .alternative-section h3 {
            font-size: 16px;
            color: #333;
            margin-bottom: 15px;
        }
        
        .verification-link {
            background-color: #ffffff;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 12px;
            font-size: 14px;
            color: #666;
            word-break: break-all;
            font-family: monospace;
        }
        
        /* Info section */
        .info-section {
            background: linear-gradient(135deg, #ffeaea, #ebc4f0);
            padding: 30px;
            border-radius: 12px;
            margin: 30px 0;
            text-align: left;
        }
        
        .info-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .info-icon {
            width: 24px;
            height: 24px;
            background: linear-gradient(135deg, #ff6b9d, #c44fb8);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            margin-right: 10px;
        }
        
        .info-list {
            list-style: none;
            padding: 0;
        }
        
        .info-list li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
            color: #555;
            font-size: 14px;
        }
        
        .info-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #ff6b9d;
            font-weight: bold;
        }
        
        /* Footer */
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer-content {
            font-size: 14px;
            color: #666;
            line-height: 1.5;
        }
        
        .footer-links {
            margin: 20px 0;
        }
        
        .footer-links a {
            color: #ff6b9d;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 500;
        }
        
        .footer-links a:hover {
            text-decoration: underline;
        }
        
        .social-links {
            margin-top: 20px;
        }
        
        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: #e9ecef;
            border-radius: 50%;
            margin: 0 8px;
            text-align: center;
            line-height: 40px;
            color: #666;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background: linear-gradient(135deg, #ff6b9d, #c44fb8);
            color: white;
        }
        
        /* Security notice */
        .security-notice {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            font-size: 14px;
            color: #856404;
        }
        
        .security-notice strong {
            display: block;
            margin-bottom: 5px;
        }
        
        /* Responsive */
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                box-shadow: none;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .welcome-text {
                font-size: 20px;
            }
            
            .verify-button {
                padding: 14px 28px;
                font-size: 15px;
            }
            
            .info-section,
            .footer {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo-section">
                <div class="logo-placeholder">HF</div>
                <h1>HormoneFit</h1>
                <p>Personalized Menopause Care for Canadians</p>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <h2 class="welcome-text">Welcome ${first_name} 🌟</h2>
            
            <p class="description">
                Thank you for joining thousands of Canadian women who have taken control of their menopause journey. 
                To complete your registration and secure your account, please verify your email address.
            </p>
            
            <!-- Verification Button -->
            <a href="${verification_url}" class="verify-button">
                Verify My Email Address
            </a>
            
            <!-- Alternative Link Section -->
            <div class="alternative-section">
                <h3>Can't click the button above?</h3>
                <div class="verification-link">${verification_url}</div>
                <p style="font-size: 14px; color: #666; margin-top: 10px;">
                    Copy and paste this link into your browser to verify your account.
                </p>
            </div>
            
            <!-- What's Next Section -->
            <div class="info-section">
                <h3 class="info-title">
                    <span class="info-icon">🎯</span>
                    What happens next?
                </h3>
                <ul class="info-list">
                    <li>Complete our comprehensive menopause assessment</li>
                    <li>Connect with licensed Canadian healthcare professionals</li>
                    <li>Receive your personalized treatment plan</li>
                    <li>Access ongoing support and care adjustments</li>
                    <li>Join our community of empowered women</li>
                </ul>
            </div>
            
            <!-- Security Notice -->
            <div class="security-notice">
                <strong>🔒 Security Notice</strong>
                This verification link will expire in 24 hours for your security. 
                If you didn't create a HormoneFit account, please ignore this email.
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <p><strong>Need help?</strong> Our support team is here for you.</p>
                
                <div class="footer-links">
                    <a href="mailto:support@hormonefit.ca">Contact Support</a>
                    <a href="https://hormonefit.ca/faq">FAQ</a>
                    <a href="https://hormonefit.ca/privacy">Privacy Policy</a>
                </div>
                
                <p style="margin: 20px 0; font-size: 13px;">
                    Empowering women through personalized menopause care<br>
                    <span style="color: #999;">
                        This email was sent to ${email} because you created an account with HormoneFit.
                    </span>
                </p>
                
                <div class="social-links">
                    <a href="#" title="Instagram">📷</a>
                    <a href="#" title="Facebook">📘</a>
                    <a href="#" title="Twitter">🐦</a>
                    <a href="#" title="LinkedIn">💼</a>
                </div>
                
                <p style="font-size: 12px; color: #999; margin-top: 20px;">
                    © 2025 HormoneFit | All Rights Reserved<br>
                    Made with ❤️ for Canadian women
                </p>
            </div>
        </div>
    </div>
</body>
</html>`
}