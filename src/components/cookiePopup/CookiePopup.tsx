import CookieConsent from "react-cookie-consent";

export default function CookiePopup() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="sea_battle_cookie_consent"
      style={{ background: "#1f2937" }}
      buttonStyle={{
        background: "#22c55e",
        color: "#fff",
        fontSize: "14px",
      }}
      declineButtonStyle={{
        background: "#ef4444",
        color: "#fff",
        fontSize: "14px",
      }}
      expires={150}
      onAccept={() => {
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        console.log("Cookies declined");
        localStorage.clear();
      }}
    >
      This website uses cookies and local storage to save game progress and
      settings. By continuing to use this app, you agree to our Privacy Policy.
    </CookieConsent>
  );
}
