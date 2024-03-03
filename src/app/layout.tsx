
import type { Metadata } from "next";
import {  Roboto } from 'next/font/google'
import { Byline } from './components/byline'
import "./globals.css";
import { GlobalNav } from "./components/global-nav";
import { AuthProvider } from "./contexts/AuthContext";




const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    default: 'Fabiano o Bispo',
    template: 'teste',
  },
  description: 'Meu site pessoal para testes de novas tecnologias.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="overflow-y-scroll bg-[url('/grid.svg')] pb-36">
       <AuthProvider>          
          <GlobalNav /> 
          {}
          <div className="lg:pl-72">
            <div className="mx-auto max-w-7xl space-y-1 px-2 pt-20 lg:px-8 lg:py-8">
              {/* <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
                <div className="rounded-lg bg-black">aqui</div>
              </div> */}
              <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/0">
                {/* <div className="rounded-lg bg-black p-3.5 lg:p-6"> */}

                {children}
                {/* </div> */}
              </div>
             {/*  <Byline className="fixed sm:hidden" /> */}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
