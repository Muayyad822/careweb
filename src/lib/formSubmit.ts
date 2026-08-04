export const CAREWEB_CONTACT_EMAIL = "info@carewebhealthcare.com";

interface FormSubmitOptions {
  subject: string;
  data: Record<string, string | number | boolean | undefined | null>;
}

export async function submitForm({
  subject,
  data,
}: FormSubmitOptions): Promise<{ success: boolean; message?: string }> {
  try {
    // Filter out undefined or null values
    const cleanData: Record<string, string> = {};
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && value !== null && value !== "") {
        cleanData[key] = String(value);
      }
    }

    const payload = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...cleanData,
      "Submitted At": new Date().toLocaleString("en-GB", {
        timeZone: "Europe/London",
        dateStyle: "full",
        timeStyle: "short",
      }),
    };

    const response = await fetch(
      `https://formsubmit.co/ajax/${CAREWEB_CONTACT_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    if (response.ok) {
      return {
        success: true,
        message: result.message || "Message sent successfully!",
      };
    } else {
      return {
        success: false,
        message: result.message || "Failed to submit form. Please try again.",
      };
    }
  } catch (error: any) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message:
        error?.message ||
        "A network error occurred. Please try again or contact us directly.",
    };
  }
}
