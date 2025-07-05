/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "emad-portfolio-five.vercel.app",
      "images.unsplash.com",
      "fonts.gstatic.com",
      "logo.clearbit.com",
    ], // هاست‌های مجاز برای تصاویر
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === "development",
  },
  // برای جلوگیری از خطاهای تایپ‌اسکریپت در زمان ساخت
};
