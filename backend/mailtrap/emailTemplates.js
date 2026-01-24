export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background: linear-gradient(135deg, #4a148c, #7b1fa2); font-family: 'Segoe UI', system-ui, sans-serif; color: #ffffff; }
    .container { max-width: 600px; margin: 40px auto; background: rgba(0,0,0,0.3); border-radius: 30px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6); backdrop-filter: blur(10px); }
    .header { background: linear-gradient(135deg, #9c27b0, #e040fb); padding: 50px 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 42px; font-weight: 900; text-transform: uppercase; letter-spacing: 6px; text-shadow: 0 4px 10px rgba(0,0,0,0.5); }
    .content { padding: 50px 40px; text-align: center; }
    .code-box { background: rgba(255,255,255,0.15); border: 3px solid #e040fb; border-radius: 20px; padding: 30px; margin: 30px auto; display: inline-block; min-width: 280px; box-shadow: 0 10px 30px rgba(156,39,176,0.6); }
    .code { font-size: 48px; font-weight: 900; letter-spacing: 12px; color: #e040fb; text-shadow: 0 0 20px #e040fb; }
    .footer { padding: 30px; text-align: center; font-size: 13px; color: #ce93d8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>TASDIQLASH KODI</h1>
    </div>
    <div class="content">
      <p style="font-size: 24px; margin: 0 0 20px;">Boom! Xush kelibsiz! 🔥</p>
      <p style="font-size: 18px;">Ro'yxatdan o'tishni yakunlash uchun quyidagi maxfiy koddan foydalaning:</p>
      <div class="code-box">
        <span class="code">{verificationCode}</span>
      </div>
      <p style="font-size: 15px; color: #ce93d8;">Kod 15 daqiqa ichida faol. Tezroq harakat qiling!</p>
    </div>
    <div class="footer">
      © 2026 Sizning Brendingiz. Barcha huquqlar himoyalangan.
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background: linear-gradient(180deg, #311b92, #512da8); font-family: 'Segoe UI', system-ui, sans-serif; color: #ffffff; }
    .container { max-width: 600px; margin: 40px auto; background: rgba(0,0,0,0.25); border-radius: 30px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6); backdrop-filter: blur(8px); border-top: 6px solid #ab47bc; }
    .content { padding: 60px 40px; text-align: center; }
    .icon-circle { width: 100px; height: 100px; background: linear-gradient(135deg, #7b1fa2, #ba68c8); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; box-shadow: 0 0 40px #ab47bc; }
    .icon { font-size: 60px; }
    h2 { color: #e040fb; font-size: 38px; margin: 0 0 20px; text-shadow: 0 4px 10px rgba(0,0,0,0.5); }
    p { font-size: 18px; line-height: 1.6; }
    .alert { background: rgba(156,39,176,0.3); border-radius: 15px; padding: 20px; margin-top: 30px; font-size: 14px; border: 1px solid #ab47bc; }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <div class="icon-circle">
        <span class="icon">⚡</span>
      </div>
      <h2>PAROL YANGILANDI!</h2>
      <p>Sizning hisobingiz paroli muvaffaqiyatli o'zgartirildi. Endi yangi parolingiz bilan tizimga kirishingiz mumkin!</p>
      <div class="alert">
        <strong>Eslatma:</strong> Agar buni siz qilmagan bo'lsangiz, darhol biz bilan bog'laning!
      </div>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background: linear-gradient(135deg, #4527a0, #7e57c2); font-family: 'Segoe UI', system-ui, sans-serif; color: #ffffff; }
    .container { max-width: 600px; margin: 40px auto; background: rgba(0,0,0,0.3); border-radius: 30px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6); backdrop-filter: blur(10px); }
    .header { background: linear-gradient(135deg, #7b1fa2, #ab47bc); padding: 60px 20px; text-align: center; }
    .header h2 { margin: 0; font-size: 40px; font-weight: 900; letter-spacing: 4px; text-shadow: 0 4px 10px rgba(0,0,0,0.5); }
    .content { padding: 50px 40px; text-align: center; }
    .button { background: #e040fb; color: white !important; padding: 18px 50px; text-decoration: none; border-radius: 60px; font-size: 20px; font-weight: bold; display: inline-block; box-shadow: 0 10px 30px rgba(224,64,251,0.6); transition: all 0.3s; }
    .button:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(224,64,251,0.8); }
    .timer { font-size: 14px; color: #ce93d8; margin-top: 25px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>PAROLNI TIKLASH</h2>
    </div>
    <div class="content">
      <p style="font-size: 20px; margin-bottom: 30px;">Parolingizni esdan chiqardingizmi? Havotir olmang, biz hozir yordam beramiz! 💥</p>
      <a href="{resetURL}" class="button">YANGI PAROL O'R NATISH</a>
      <p class="timer">Ushbu tugma 1 soat davomida faol.</p>
    </div>
  </div>
</body>
</html>
`;
