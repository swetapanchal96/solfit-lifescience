"use client";

import { ReCAPTCHA } from "react-google-recaptcha";

export default function RecaptchaBox({
    onVerify,
}: {
    onVerify: (token: string | null) => void;
}) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        return (
            <div className="text-center text-sm text-red-600">
                Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY
            </div>
        );
    }

    return (
        <div className="mt-7 flex justify-center">
            {/* This shows the real "I'm not a robot" UI */}
            <ReCAPTCHA sitekey={siteKey} onChange={onVerify} />
        </div>
    );
}
