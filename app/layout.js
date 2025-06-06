import "./globals.css"
import { Header } from "./components/Header/Header";

export const metadata = {
  title: "Агро Проф",
  description: "Сайт для выбора профессии в агропромышленном комплексе",
};
export const icons = {
  icon: './favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
