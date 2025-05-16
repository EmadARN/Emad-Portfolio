/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // هاست‌های مجاز برای تصاویر
  },
  typescript: { ignoreBuildErrors: true }, // برای جلوگیری از خطاهای تایپ‌اسکریپت در زمان ساخت
};
