// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


import '@/app/ui/global.css';
// import { inter } from '/app/ui/fonts';
import {lusitana } from '@/app/ui/font';

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${lusitana.className} antialiased`}>{children}</body>

    </html>
  );
}