export default function Footer({
  companyName,
  year,
}: {
  companyName: string;
  year?: number;
}) {
  return (
    <footer className="mt-4 text-center text-sm text-gray-500">
      <p>
        &copy; {year || new Date().getFullYear()} {companyName || "Marketplace"}
        . All rights reserved.
      </p>
    </footer>
  );
}
