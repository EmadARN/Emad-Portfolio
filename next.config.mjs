/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "your-domain.com",
      "images.unsplash.com",
      "fonts.gstatic.com",
      "logo.clearbit.com",
    ], // هاست‌های مجاز برای تصاویر
  },
  typescript: { ignoreBuildErrors: true }, // برای جلوگیری از خطاهای تایپ‌اسکریپت در زمان ساخت
};
