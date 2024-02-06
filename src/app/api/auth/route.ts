import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { customInitApp } from "../../../../firebase-admin-config";

// iniciar firebase
customInitApp();

export async function POST() {
  const authorization = headers().get("Authorization");
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];
    const decodedToken = await auth().verifyIdToken(idToken);

    if (decodedToken) {
      //Generar cookie
      const expiresIn = 60 * 60 * 24 * 1 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn
      });
      console.log(sessionCookie);

      const options = {
        name: process.env.COOKIE_SESSION_NAME,
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true
      };

      //Agregar cookie al browser
      cookies().set(options as any);
    }
  }

  return NextResponse.json({}, { status: 200 });
}

// autenticar usuario
export async function GET() {
  const session = cookies().get(process.env.COOKIE_SESSION_NAME || "")?.value || "";

  //Validar si la cookie existe
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  //Usar Firebase para validar la cookie
  const decodedClaims = await auth().verifySessionCookie(session, true);

  if (!decodedClaims) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  return NextResponse.json({ isLogged: true }, { status: 200 });
}
