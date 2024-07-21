import PlacesPage from "@/components/PlacesPage";

export default function Page1() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">Lugares</h1>
      </div>
      <PlacesPage />
    </div>
  );
}