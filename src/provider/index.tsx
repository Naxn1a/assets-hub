import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/toaster";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={true}
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
