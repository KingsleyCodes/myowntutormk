import './globals.css';

export const metadata = {
  title: 'My Own Tutor Milton Keynes| 6-Week Online Summer Tuition Programme',
  description: 'Give your child the academic edge with expert-led online tuition.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}