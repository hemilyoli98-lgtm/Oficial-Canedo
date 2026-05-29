import './globals.css'

export const metadata = {
  title: 'Canedo Sacabollos',
  description: 'Academia Premium de Reparación PDR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
