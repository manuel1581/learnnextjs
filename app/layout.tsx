import "@/app/ui/global.css"
//import {inter} from "@/app/ui/font"
import { lusitana } from "./ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //<body className = {`${inter.className} antialised`} >{children}</body>
  return (
    <html lang="en">
      <body className = {`${lusitana.className} antialised`} >{children}</body>
    </html>
  );
}
