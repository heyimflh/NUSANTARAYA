import { Metadata } from "next";
import { PassportPageShell } from "@/components/passport/PassportPageShell";

export const metadata: Metadata = {
  title: "Nusa Passport — Jejak Perjalanan Nusantaramu",
  description: "Lihat rute tersimpan, progres 38 provinsi, koleksi stempel, badge wilayah, dan ekspedisi berikutnya di NUSANTARAYA.",
};

export default function PassportPage() {
  return <PassportPageShell />;
}
