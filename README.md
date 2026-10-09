# Saiqi
the full website for Saiqi App

## Account deletion requests

The public page is "delete-account.html", linked from the homepage footer and Privacy Policy. It works on GitHub Pages without a server or API keys. Native form submissions use FormSubmit, with its default reCAPTCHA enabled, and are addressed to saiqi-cab@hotmail.com. The contact email is used as Reply-To. Requests require manual ownership verification; this form never deletes an account automatically.

### Activate email delivery before sharing the page

1. Publish these files through the repository's existing GitHub Pages deployment.
2. Open the live deletion page over HTTPS and submit a clearly labelled test request using contact details you control.
3. Open the FormSubmit activation email in saiqi-cab@hotmail.com (check spam) and confirm the form.
4. Submit another test request and verify the email arrives, including the account identifier and preferred contact method. Do not assume pre-activation requests have been delivered.

Visitors do not need an email login. They enter a contact email, submit the form, complete FormSubmit's security check, and return to https://ahmadamoos.github.io/Saiqi/ after a successful submission. If delivery fails, the page also offers the existing Saiqi WhatsApp support link.

FormSubmit processes the submitted contact details; its documentation states submissions are retained in its archive for 30 days. Review this provider's privacy terms for your deployment. No secret is stored in the website. The form action uses the opaque FormSubmit identifier supplied in the activation email for the recipient, rather than exposing the recipient address in the form endpoint. Confirm the activation email and verify delivery to saiqi-cab@hotmail.com after deployment.

Documentation: https://formsubmit.co/documentation

Delivery has not been activated or verified by the local implementation.
