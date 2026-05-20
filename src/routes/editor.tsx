import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { EditorDesk } from "@/components/EditorDesk";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/editor")({
  component: EditorPage,
});

function EditorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <EditorDesk />
      </main>
      <Footer />
    </>
  );
}
