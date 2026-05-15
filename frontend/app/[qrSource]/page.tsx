import { notFound } from "next/navigation";
import Home from "../page";

const validSources = new Set(["QR=1", "QR=2", "QR=3", "QR=4", "QR=5"]);

export default function QRSourcePage({
  params,
}: {
  params: { qrSource: string };
}) {
  const source = decodeURIComponent(params.qrSource);

  if (!validSources.has(source)) {
    notFound();
  }

  return <Home />;
}
