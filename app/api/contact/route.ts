import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = process.env.CONTACT_SHEET_ID!;

async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

export async function POST(req: NextRequest) {
  try {
    const { type, nom, organisation, email, telephone, message } = await req.json();

    if (!nom || !email || !organisation) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const sheets = await getSheets();
    const date = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "contact!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[date, type, nom, organisation, email, telephone || "", message || "", "Nouveau"]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
