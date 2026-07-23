
const PRIVACY_POLICY_VERSION = "1.0";
const PRIVACY_POLICY_EFFECTIVE_DATE = "2026-07-22";

const en = {
  title: "Saiqi Privacy Policy",
  subtitle:
    "This policy applies to Passengers, Drivers, Taxi Companies, and visitors using the Saiqi Platform.",
  versionLabel: "Version",
  effectiveDateLabel: "Effective date",
  sections: [
    {
      title: "1. Who we are and how to contact us",
      paragraphs: [
        "Saiqi provides technology that connects Passengers, Drivers, and Taxi Companies and supports Ride requests, offers, assignments, location sharing, communications, ratings, account administration, safety, fraud prevention, and related services (the “Platform”).",
        "Privacy questions, rights requests, and legal notices may be sent to saiqi-cab@hotmail.com, by telephone or WhatsApp at +972 59 884 6632, or by mail to Saiqi, Tulkarem, State of Palestine. Before public launch, Saiqi will publish any additional legal registration and controller information required by applicable law.",
      ],
    },
    {
      title: "2. Scope and role-specific notices",
      paragraphs: [
        "This is one Platform-wide policy. Sections below explain the different processing that applies to Passenger, Driver, and Taxi Company profiles. A person may hold more than one separate role profile under one Firebase authentication identity. Data, permissions, ratings, and deletion status remain role-specific unless this policy says otherwise.",
        "Deleting one role does not automatically delete another active role. A Passenger profile and Driver profile may therefore continue independently even when they use the same sign-in identity.",
      ],
    },
    {
      title: "3. Information collected for every account",
      paragraphs: [
        "Depending on the sign-in method and role, Saiqi may process the following information:",
      ],
      bullets: [
        "Firebase UID, verified phone number or email, authentication status, and account role links.",
        "Name, profile image, language, city or service area, and contact information you provide.",
        "Device identifiers, push-notification tokens, app version, operating system, IP address, logs, diagnostics, security events, and connection information.",
        "Agreement acceptance, policy version, consent and permission choices, support communications, complaints, and account-deletion activity.",
      ],
    },
    {
      title: "4. Passenger information",
      paragraphs: [
        "For Passenger profiles, Saiqi may process pickup and destination points, current location when permission is granted, Ride details, Taxi Company offers, selected Driver and Vehicle information, fares, cancellations, messages, support cases, Ride history, ratings, comments, saved preferences, and information needed when requesting a Ride for another person.",
        "Passenger information is used to request and coordinate Rides, display offers, help Drivers and Taxi Companies perform the Ride, provide safety and support, resolve disputes, prevent fraud, calculate service information, and maintain lawful records.",
      ],
    },
    {
      title: "5. Driver information",
      paragraphs: [
        "For Driver profiles, Saiqi may process identity and verification information, phone number, Driver images, licence or government-identifier verification results, city and service area, Taxi Company relationships, Vehicle and Driver Session information, availability, current and live location while using operational location functions, Ride assignments and status, routes, fares, earnings-related records, cancellations, ratings, complaints, safety events, restrictions, and return-review records.",
        "Raw licence or government identifiers should not be stored in reputation tables. Saiqi may instead retain a domain-separated HMAC or other pseudonymous identity reference after proper verification to prevent rating resets, fraud, duplicate restricted accounts, and circumvention of safety decisions.",
      ],
    },
    {
      title: "6. Taxi Company information",
      paragraphs: [
        "For Taxi Company profiles, Saiqi may process the Company name, verified legal-registration number, business phone and email, owner or authorized representative information, agreement acceptance, logo and verification documents, address and operating areas, fleet, Drivers, Driver Sessions, Ride offers, assignments, fares, commissions, balances, ratings, complaints, safety and fraud restrictions, support cases, and account-return reviews.",
        "A pseudonymous reputation identity based on a verified legal-registration number may preserve rating and restriction continuity without storing the raw legal number in the reputation table.",
      ],
    },
    {
      title: "7. Location information",
      paragraphs: [
        "Saiqi requests location only for Platform functions that require it. Passenger location helps select pickup and destination points and coordinate a Ride. Driver location supports availability, Driver Sessions, pickup, Ride progress, safety, and dispatch. Company personnel may see operational Driver or Ride location only when authorized and necessary.",
        "System permission settings control device access. Refusing location may limit location-dependent functions; where available, a person may enter a location manually. Saiqi must not use location for unrelated advertising or sell precise location data.",
      ],
    },
    {
      title: "8. Sources of information",
      paragraphs: [
        "Saiqi receives information directly from account holders; from Firebase and device services; from Passengers, Drivers, and Taxi Companies participating in a Ride; from location, mapping, notification, and communication providers; and from support, complaint, safety, fraud, or lawful authority processes. Saiqi will not secretly collect personal information from unrelated sources.",
      ],
    },
    {
      title: "9. Why information is used",
      paragraphs: [
        "Saiqi processes information to provide and secure the Platform, authenticate accounts, verify eligibility, coordinate Rides, operate location and notification functions, communicate, calculate and display Ride and financial records, maintain ratings, support users, investigate incidents, enforce agreements, prevent fraud and abuse, comply with law, and establish, exercise, or defend legal claims.",
        "Where applicable law requires a legal basis, processing may rely on performance of a contract, compliance with legal obligations, protection of vital interests, legitimate interests balanced against individual rights, or consent. Consent may be withdrawn for future consent-based processing without making earlier lawful processing invalid.",
      ],
    },
    {
      title: "10. When information is shared",
      paragraphs: [
        "Information may be shared only as reasonably necessary with the Passenger, Driver, and Taxi Company involved in a Ride; authorized Company personnel; hosting, authentication, mapping, notification, analytics, communication, storage, security, and support providers; professional advisers, insurers, and payment or banking providers if introduced; and competent authorities when lawfully required.",
        "Saiqi uses services including Firebase/Google services and mapping or infrastructure providers. Providers must be selected and bound to process information only for authorized purposes with protections that are the same as or equivalent to those described in this policy and required by applicable law. Saiqi does not sell personal information or precise location data.",
      ],
    },
    {
      title: "11. Retention, deletion, and legal holds",
      paragraphs: [
        "Active profile information is retained while required to operate the relevant role. Current location, presence, device tokens, pending offers, and similar operational data are removed or expired when no longer needed, subject to technical backups and lawful requirements. Completed Ride, rating, complaint, safety, accounting, commission, fraud, and dispute records may be retained in identified, access-restricted, or anonymized form for documented lawful periods.",
        "When a Passenger or Driver deletion is accepted, ordinary profile access is removed and eligible profile data is deleted or anonymized. Before anonymization, limited identity information may be placed in an encrypted, access-restricted legal archive for up to 365 days for legal claims, disputes, safety, fraud prevention, and lawful orders. A documented legal hold may delay purging only for as long as lawfully necessary.",
        "A Taxi Company deletion request has a 14-day cancellation period with immediate operational restrictions. After final deletion, its limited encrypted legal archive is retained for up to one year, subject to legal hold. Separate pseudonymous Driver and Company reputation records may be retained for a documented, lawyer-approved safety and fraud-prevention period. Those records do not restore a deleted personal profile.",
      ],
    },
    {
      title: "12. Account deletion and returning",
      paragraphs: [
        "Account deletion is available from the relevant role's Settings page. Deletion may wait until an accepted, waiting, or ongoing Ride is safely completed or lawfully cancelled. Deleting one role does not delete a different active role using the same authentication identity, and Firebase authentication is deleted only when no other active role requires it.",
        "A returning Driver or Taxi Company must complete fresh verification and review. Saiqi creates a new operational profile where applicable and links only the preserved reputation subject; deleted profile information is not restored. Ratings, complaints, balances, fraud decisions, and safety restrictions are not reset by deletion.",
      ],
    },
    {
      title: "13. Security and archive access",
      paragraphs: [
        "Saiqi uses access controls, role authorization, transport security, restricted production secrets, encryption for legal archives, domain-separated keyed lookup values, audit logs, and operational monitoring. No system is completely secure, but Saiqi will maintain safeguards appropriate to the nature and risk of the information.",
        "Encrypted legal archives may be accessed only by specifically authorized personnel for a documented case, lawful reason, and necessary fields. Access and decisions must be logged. Information will not be disclosed merely because someone asks; a valid legal basis or lawful order is required where applicable.",
      ],
    },
    {
      title: "14. International processing",
      paragraphs: [
        "Cloud, authentication, mapping, notification, and support providers may process information in countries other than the account holder's country. Saiqi will use appropriate contractual, organizational, and legal safeguards where required and will describe material providers and transfer mechanisms in its public processing records.",
      ],
    },
    {
      title: "15. Your choices and rights",
      paragraphs: [
        "Depending on applicable law, a person may request access, correction, deletion, restriction, objection, portability, consent withdrawal, or review of a significant safety, fraud, rating, or account decision. Identity must be reasonably verified before fulfilling a request. Some requests may be limited where retention is required for another person's rights, safety, an unresolved Ride or balance, fraud prevention, legal obligations, or legal claims.",
        "Device permissions may be changed in system settings. Marketing messages, if introduced, must include an opt-out. Privacy requests may be sent using the contact details in Section 1, and a complaint may also be made to a competent privacy or regulatory authority where that right exists.",
      ],
    },
    {
      title: "16. Children",
      paragraphs: [
        "Saiqi is not directed to children who cannot lawfully hold an account or enter the applicable agreement. A Ride requested for a minor must be arranged by an authorized adult and comply with law and Platform safety rules. If Saiqi learns that a child's information was collected unlawfully, it will restrict and delete it as required.",
      ],
    },
    {
      title: "17. Changes to this policy",
      paragraphs: [
        "Saiqi may update this policy when products, providers, legal requirements, or data practices change. The current version and effective date will be displayed. Material changes will be communicated in the Platform or through appropriate contact channels, and fresh consent will be requested when law requires it.",
      ],
    },
  ],
};

const ar = {
  title: "سياسة الخصوصية لمنصة سائقي",
  subtitle:
    "تنطبق هذه السياسة على الركاب والسائقين وشركات التاكسي وزوار منصة سائقي.",
  versionLabel: "الإصدار",
  effectiveDateLabel: "تاريخ النفاذ",
  sections: [
    {
      title: "1. من نحن وكيفية التواصل معنا",
      paragraphs: [
        "توفر سائقي منصة تقنية تربط الركاب والسائقين وشركات التاكسي، وتدعم طلبات الرحلات والعروض والتعيين ومشاركة الموقع والتواصل والتقييمات وإدارة الحسابات والسلامة ومنع الاحتيال والخدمات المرتبطة بها (ويشار إليها بـ«المنصة»).",
        "يمكن إرسال أسئلة الخصوصية وطلبات الحقوق والإشعارات القانونية إلى saiqi-cab@hotmail.com، أو عبر الهاتف وواتساب على الرقم ‎+972 59 884 6632، أو بالبريد إلى سائقي، طولكرم، دولة فلسطين. وقبل الإطلاق العام ستنشر سائقي أي بيانات تسجيل قانونية أو بيانات مسؤول المعالجة التي يوجبها القانون.",
      ],
    },
    {
      title: "2. نطاق السياسة والإشعارات الخاصة بكل دور",
      paragraphs: [
        "هذه سياسة واحدة تشمل المنصة كلها. وتوضح الأقسام التالية المعالجة المختلفة لملفات الراكب والسائق وشركة التاكسي. قد يملك الشخص أكثر من ملف دور مستقل تحت هوية مصادقة واحدة في Firebase، مع بقاء البيانات والصلاحيات والتقييمات وحالة الحذف منفصلة لكل دور ما لم تنص السياسة على غير ذلك.",
        "حذف دور واحد لا يؤدي تلقائياً إلى حذف دور نشط آخر، لذلك قد يستمر ملف الراكب وملف السائق بصورة مستقلة حتى عند استخدام بيانات الدخول نفسها.",
      ],
    },
    {
      title: "3. المعلومات التي نجمعها لجميع الحسابات",
      paragraphs: ["بحسب طريقة الدخول والدور، قد تعالج سائقي المعلومات الآتية:"],
      bullets: [
        "معرّف Firebase ورقم الهاتف أو البريد الإلكتروني الموثق وحالة المصادقة وروابط أدوار الحساب.",
        "الاسم وصورة الملف واللغة والمدينة أو منطقة الخدمة ومعلومات الاتصال التي تقدمها.",
        "معرّفات الجهاز ورموز الإشعارات وإصدار التطبيق ونظام التشغيل وعنوان IP والسجلات والتشخيصات وأحداث الأمان ومعلومات الاتصال التقني.",
        "الموافقة على الاتفاقيات ونسخة السياسة وخيارات الموافقة والأذونات ومراسلات الدعم والشكاوى ونشاط حذف الحساب.",
      ],
    },
    {
      title: "4. معلومات الراكب",
      paragraphs: [
        "قد تعالج سائقي لملف الراكب نقاط الانطلاق والوجهة والموقع الحالي عند منح الإذن وتفاصيل الرحلة وعروض شركات التاكسي ومعلومات السائق والمركبة المختارين والأجرة والإلغاءات والرسائل وحالات الدعم وسجل الرحلات والتقييمات والتعليقات والتفضيلات المحفوظة والمعلومات اللازمة عند طلب رحلة لشخص آخر.",
        "تستخدم هذه المعلومات لطلب الرحلات وتنسيقها وعرض العروض ومساعدة السائق والشركة على تنفيذ الرحلة وتوفير السلامة والدعم وحل النزاعات ومنع الاحتيال وحساب معلومات الخدمة والاحتفاظ بالسجلات القانونية.",
      ],
    },
    {
      title: "5. معلومات السائق",
      paragraphs: [
        "قد تعالج سائقي معلومات الهوية والتحقق ورقم الهاتف وصور السائق ونتائج التحقق من الرخصة أو المعرّف الحكومي والمدينة ومنطقة الخدمة والعلاقات مع شركات التاكسي ومعلومات المركبة وجلسات السائق والتوفر والموقع الحالي والمباشر أثناء استخدام وظائف الموقع التشغيلية وتعيينات الرحلات وحالتها والمسارات والأجرة والسجلات المرتبطة بالأرباح والإلغاءات والتقييمات والشكاوى وأحداث السلامة والقيود وطلبات مراجعة العودة.",
        "لا ينبغي تخزين رقم الرخصة أو المعرّف الحكومي الخام في جداول السمعة. وبدلاً من ذلك قد تحتفظ سائقي بعد التحقق الصحيح بقيمة HMAC مفصولة النطاق أو مرجع هوية مستعار لمنع تصفير التقييمات والاحتيال وتكرار الحسابات المقيدة والالتفاف على قرارات السلامة.",
      ],
    },
    {
      title: "6. معلومات شركة التاكسي",
      paragraphs: [
        "قد تعالج سائقي اسم الشركة ورقم التسجيل القانوني الموثق وهاتف العمل وبريده ومعلومات المالك أو الممثل المفوض وقبول الاتفاقية والشعار ووثائق التحقق والعنوان ومناطق التشغيل والأسطول والسائقين وجلساتهم وعروض الرحلات والتعيينات والأجرة والعمولات والأرصدة والتقييمات والشكاوى وقيود السلامة والاحتيال وحالات الدعم ومراجعات عودة الشركة.",
        "يمكن لهوية سمعة مستعارة مبنية على رقم تسجيل قانوني موثق أن تحفظ استمرارية التقييم والقيود دون تخزين الرقم القانوني الخام في جدول السمعة.",
      ],
    },
    {
      title: "7. معلومات الموقع",
      paragraphs: [
        "تطلب سائقي الموقع فقط لوظائف المنصة التي تحتاج إليه. يساعد موقع الراكب في تحديد نقطتي الانطلاق والوجهة وتنسيق الرحلة. ويدعم موقع السائق التوفر والجلسات والوصول إلى الراكب وتقدم الرحلة والسلامة والتوجيه. ولا يرى موظفو الشركة موقع السائق أو الرحلة التشغيلي إلا عند وجود صلاحية وحاجة.",
        "تتحكم إعدادات أذونات الجهاز في الوصول. وقد يؤدي رفض الموقع إلى تقييد الوظائف المعتمدة عليه، مع إتاحة إدخال الموقع يدوياً حيثما أمكن. لا تستخدم سائقي الموقع لإعلانات غير مرتبطة ولا تبيع بيانات الموقع الدقيق.",
      ],
    },
    {
      title: "8. مصادر المعلومات",
      paragraphs: [
        "تتلقى سائقي المعلومات مباشرة من أصحاب الحسابات، ومن Firebase وخدمات الجهاز، ومن الراكب والسائق والشركة المشاركين في الرحلة، ومن مزودي الموقع والخرائط والإشعارات والاتصالات، ومن إجراءات الدعم والشكاوى والسلامة والاحتيال والجهات الرسمية. ولا تجمع سائقي سراً معلومات شخصية من مصادر غير مرتبطة.",
      ],
    },
    {
      title: "9. أغراض استخدام المعلومات والأساس القانوني",
      paragraphs: [
        "تعالج سائقي المعلومات لتقديم المنصة وتأمينها، ومصادقة الحسابات، والتحقق من الأهلية، وتنسيق الرحلات، وتشغيل الموقع والإشعارات، والتواصل، وحساب وعرض سجلات الرحلات والمال، وإدارة التقييمات، وتقديم الدعم، والتحقيق في الحوادث، وإنفاذ الاتفاقيات، ومنع الاحتيال والإساءة، والامتثال للقانون، وإقامة المطالبات القانونية أو ممارستها أو الدفاع عنها.",
        "عندما يتطلب القانون أساساً قانونياً، قد تعتمد المعالجة على تنفيذ العقد أو الالتزام القانوني أو حماية المصالح الحيوية أو المصلحة المشروعة المتوازنة مع حقوق الأفراد أو الموافقة. ويمكن سحب الموافقة للمعالجة المستقبلية القائمة عليها دون إبطال المعالجة السابقة المشروعة.",
      ],
    },
    {
      title: "10. مشاركة المعلومات",
      paragraphs: [
        "لا تُشارك المعلومات إلا بقدر الحاجة المعقولة مع الراكب والسائق والشركة المشاركين في الرحلة، وموظفي الشركة المخولين، ومزودي الاستضافة والمصادقة والخرائط والإشعارات والتحليلات والاتصالات والتخزين والأمن والدعم، والمستشارين والجهات المؤمنة ومزودي الدفع أو البنوك إذا أضيفوا، والسلطات المختصة عند وجود طلب قانوني.",
        "تستخدم سائقي خدمات Firebase/Google وخدمات الخرائط والبنية التحتية. ويجب اختيار المزودين وإلزامهم بالمعالجة للأغراض المصرح بها فقط وبحماية مماثلة أو مساوية لما تقرره هذه السياسة والقانون. لا تبيع سائقي المعلومات الشخصية أو بيانات الموقع الدقيق.",
      ],
    },
    {
      title: "11. الاحتفاظ والحذف والتجميد القانوني",
      paragraphs: [
        "تُحفظ معلومات الملف النشط ما دامت لازمة لتشغيل الدور. ويُحذف أو تنتهي صلاحية الموقع الحالي والحضور ورموز الأجهزة والعروض المعلقة والبيانات التشغيلية المشابهة عند انتفاء الحاجة، مع مراعاة النسخ الاحتياطية والالتزامات القانونية. وقد تُحفظ سجلات الرحلات المكتملة والتقييمات والشكاوى والسلامة والمحاسبة والعمولات والاحتيال والنزاعات بصورة محددة أو مقيدة الوصول أو مجهولة لمدة قانونية موثقة.",
        "عند قبول حذف الراكب أو السائق، تزال صلاحية الملف العادية وتحذف أو تُجهّل بيانات الملف المؤهلة. وقبل التجهيل يمكن وضع معلومات هوية محدودة في أرشيف قانوني مشفر ومقيد الوصول لمدة تصل إلى 365 يوماً للمطالبات والنزاعات والسلامة ومنع الاحتيال والأوامر القانونية. وقد يؤخر تجميد قانوني موثق الإتلاف فقط للمدة اللازمة قانوناً.",
        "يمر طلب حذف الشركة بفترة إلغاء مدتها 14 يوماً مع قيود تشغيلية فورية. وبعد الحذف النهائي يُحتفظ بأرشيفها القانوني المشفر المحدود لمدة تصل إلى سنة، مع مراعاة التجميد القانوني. وقد تُحفظ سجلات سمعة مستعارة منفصلة للسائق والشركة لمدة موثقة يوافق عليها محامٍ لأغراض السلامة ومنع الاحتيال، ولا تعيد تلك السجلات إنشاء الملف الشخصي المحذوف.",
      ],
    },
    {
      title: "12. حذف الحساب والعودة",
      paragraphs: [
        "يتوفر حذف الحساب في إعدادات الدور المعني. وقد ينتظر الحذف حتى إكمال الرحلة المقبولة أو المنتظرة أو الجارية بأمان أو إلغائها بشكل نظامي. حذف دور لا يحذف دوراً نشطاً مختلفاً يستخدم هوية المصادقة نفسها، ولا تحذف مصادقة Firebase إلا عندما لا يحتاج إليها أي دور نشط آخر.",
        "يجب على السائق أو الشركة العائدين إكمال تحقق ومراجعة جديدين. وتنشئ سائقي ملفاً تشغيلياً جديداً عند الاقتضاء ولا تربطه إلا بموضوع السمعة المحفوظ، ولا تستعيد بيانات الملف المحذوف. ولا يؤدي الحذف إلى تصفير التقييمات أو الشكاوى أو الأرصدة أو قرارات الاحتيال أو قيود السلامة.",
      ],
    },
    {
      title: "13. الأمن والوصول إلى الأرشيف",
      paragraphs: [
        "تستخدم سائقي ضوابط الوصول وتفويض الأدوار وأمن النقل وأسرار إنتاج مقيدة وتشفير الأرشيفات القانونية وقيم بحث مفصولة النطاق وموقعة بمفتاح وسجلات تدقيق ومراقبة تشغيلية. لا يوجد نظام آمن بالكامل، لكن سائقي تحافظ على ضمانات تناسب طبيعة المعلومات ومخاطرها.",
        "لا يصل إلى الأرشيف القانوني المشفر إلا أشخاص مخولون تحديداً لحالة موثقة وسبب قانوني وحقول لازمة، مع تسجيل الوصول والقرارات. ولا تكشف المعلومات لمجرد طلب شخص لها؛ بل يلزم أساس قانوني أو أمر نافذ حيث يقتضي القانون.",
      ],
    },
    {
      title: "14. المعالجة الدولية",
      paragraphs: [
        "قد يعالج مزودو السحابة والمصادقة والخرائط والإشعارات والدعم المعلومات في دول غير دولة صاحب الحساب. وستستخدم سائقي الضمانات التعاقدية والتنظيمية والقانونية المناسبة عند وجوبها، وتوضح المزودين المهمين وآليات النقل في سجلات المعالجة العامة.",
      ],
    },
    {
      title: "15. خياراتك وحقوقك",
      paragraphs: [
        "بحسب القانون النافذ، يمكن طلب الوصول أو التصحيح أو الحذف أو التقييد أو الاعتراض أو النقل أو سحب الموافقة أو مراجعة قرار مهم متعلق بالسلامة أو الاحتيال أو التقييم أو الحساب. ويجب التحقق المعقول من الهوية قبل تنفيذ الطلب. وقد يُقيد الطلب عندما يلزم الاحتفاظ لحماية حقوق شخص آخر أو السلامة أو رحلة أو رصيد غير محسوم أو منع الاحتيال أو التزام قانوني أو مطالبة قانونية.",
        "يمكن تغيير أذونات الجهاز من إعدادات النظام. ويجب أن تتضمن الرسائل التسويقية، إذا أضيفت، وسيلة إيقاف. ترسل طلبات الخصوصية عبر بيانات القسم الأول، كما يمكن تقديم شكوى إلى جهة خصوصية أو رقابية مختصة حيث يقر القانون هذا الحق.",
      ],
    },
    {
      title: "16. الأطفال",
      paragraphs: [
        "لا تستهدف سائقي الأطفال الذين لا يحق لهم قانوناً امتلاك حساب أو قبول الاتفاقية. ويجب أن يرتب شخص بالغ مخول أي رحلة لقاصر وفق القانون وقواعد السلامة. وإذا علمت سائقي بجمع معلومات طفل بصورة غير قانونية فستقيدها وتحذفها كما يوجب القانون.",
      ],
    },
    {
      title: "17. تعديل السياسة",
      paragraphs: [
        "قد تحدث سائقي هذه السياسة عند تغير المنتجات أو المزودين أو المتطلبات القانونية أو ممارسات البيانات. ويُعرض الإصدار الحالي وتاريخ النفاذ. وسيُبلغ عن التغييرات الجوهرية داخل المنصة أو عبر وسيلة اتصال مناسبة، وتُطلب موافقة جديدة عندما يوجبها القانون.",
      ],
    },
  ],
};

const he = {
  title: "מדיניות הפרטיות של Saiqi",
  subtitle:
    "מדיניות זו חלה על נוסעים, נהגים, חברות מוניות ומבקרים המשתמשים בפלטפורמת Saiqi.",
  versionLabel: "גרסה",
  effectiveDateLabel: "תאריך תחילה",
  sections: [
    {
      title: "1. מי אנחנו וכיצד ליצור איתנו קשר",
      paragraphs: [
        "Saiqi מספקת פלטפורמה טכנולוגית המחברת בין נוסעים, נהגים וחברות מוניות ותומכת בבקשות נסיעה, הצעות, הקצאות, שיתוף מיקום, תקשורת, דירוגים, ניהול חשבונות, בטיחות, מניעת הונאה ושירותים קשורים (להלן: \"הפלטפורמה\").",
        "שאלות פרטיות, בקשות למימוש זכויות והודעות משפטיות ניתן לשלוח אל saiqi-cab@hotmail.com, בטלפון או WhatsApp במספר ‎+972 59 884 6632, או בדואר אל Saiqi, טולכרם, מדינת פלסטין. לפני ההשקה הציבורית תפרסם Saiqi פרטי רישום משפטי ופרטי בעל השליטה במידע כנדרש בדין.",
      ],
    },
    {
      title: "2. תחולה והודעות לפי תפקיד",
      paragraphs: [
        "זוהי מדיניות אחת לכל הפלטפורמה. הסעיפים הבאים מפרטים את העיבוד השונה החל על פרופיל נוסע, נהג וחברת מוניות. אדם יכול להחזיק ביותר מפרופיל תפקיד עצמאי אחד תחת זהות אימות Firebase אחת. הנתונים, ההרשאות, הדירוגים ומצב המחיקה נשארים נפרדים לכל תפקיד אלא אם נאמר אחרת.",
        "מחיקת תפקיד אחד אינה מוחקת אוטומטית תפקיד פעיל אחר. לכן פרופיל נוסע ופרופיל נהג יכולים להמשיך לפעול בנפרד גם כאשר הם משתמשים באותה זהות התחברות.",
      ],
    },
    {
      title: "3. מידע הנאסף בכל החשבונות",
      paragraphs: ["בהתאם לשיטת ההתחברות ולתפקיד, Saiqi עשויה לעבד:"],
      bullets: [
        "מזהה Firebase, מספר טלפון או דוא״ל מאומתים, מצב אימות וקישורים בין תפקידי החשבון.",
        "שם, תמונת פרופיל, שפה, עיר או אזור שירות ופרטי קשר שנמסרו.",
        "מזהי מכשיר, אסימוני התראות, גרסת אפליקציה, מערכת הפעלה, כתובת IP, יומנים, אבחון, אירועי אבטחה ונתוני חיבור.",
        "קבלת הסכמים, גרסת מדיניות, בחירות הסכמה והרשאה, פניות תמיכה, תלונות ופעילות מחיקת חשבון.",
      ],
    },
    {
      title: "4. מידע על נוסעים",
      paragraphs: [
        "בפרופיל נוסע Saiqi עשויה לעבד נקודות איסוף ויעד, מיקום נוכחי כאשר ניתנה הרשאה, פרטי נסיעה, הצעות מחברות מוניות, פרטי נהג ורכב שנבחרו, מחירים, ביטולים, הודעות, פניות תמיכה, היסטוריית נסיעות, דירוגים, תגובות, העדפות ומידע הנדרש להזמנת נסיעה עבור אדם אחר.",
        "המידע משמש לבקשה ותיאום של נסיעות, הצגת הצעות, סיוע לנהג ולחברה לבצע את הנסיעה, בטיחות ותמיכה, פתרון מחלוקות, מניעת הונאה, חישוב נתוני שירות ושמירת רשומות כדין.",
      ],
    },
    {
      title: "5. מידע על נהגים",
      paragraphs: [
        "בפרופיל נהג Saiqi עשויה לעבד פרטי זהות ואימות, מספר טלפון, תמונות נהג, תוצאות אימות רישיון או מזהה ממשלתי, עיר ואזור שירות, קשרים עם חברות מוניות, רכב ומשמרות נהג, זמינות, מיקום נוכחי וחי בעת שימוש בפונקציות מיקום תפעוליות, הקצאות ומצב נסיעה, מסלולים, מחירים, רשומות הכנסה, ביטולים, דירוגים, תלונות, אירועי בטיחות, הגבלות ובקשות חזרה.",
        "אין לשמור מספר רישיון או מזהה ממשלתי גולמי בטבלאות מוניטין. לאחר אימות תקין Saiqi רשאית לשמור HMAC מופרד-תחום או הפניית זהות פסבדונימית כדי למנוע איפוס דירוגים, הונאה, חשבונות מוגבלים כפולים ועקיפת החלטות בטיחות.",
      ],
    },
    {
      title: "6. מידע על חברות מוניות",
      paragraphs: [
        "בפרופיל חברה Saiqi עשויה לעבד שם חברה, מספר רישום משפטי מאומת, טלפון ודוא״ל עסקיים, פרטי בעלים או נציג מורשה, קבלת הסכם, לוגו ומסמכי אימות, כתובת ואזורי פעילות, צי, נהגים, משמרות, הצעות והקצאות נסיעה, מחירים, עמלות, יתרות, דירוגים, תלונות, הגבלות בטיחות והונאה, פניות תמיכה ובדיקות חזרת חברה.",
        "זהות מוניטין פסבדונימית המבוססת על מספר רישום משפטי מאומת יכולה לשמור רציפות דירוגים והגבלות בלי לשמור את המספר הגולמי בטבלת המוניטין.",
      ],
    },
    {
      title: "7. מידע מיקום",
      paragraphs: [
        "Saiqi מבקשת מיקום רק לפונקציות הדורשות אותו. מיקום נוסע מסייע בבחירת נקודות איסוף ויעד ובתיאום נסיעה. מיקום נהג תומך בזמינות, משמרות, איסוף, התקדמות נסיעה, בטיחות ושיגור. אנשי חברה מורשים יכולים לראות מיקום תפעולי של נהג או נסיעה רק כאשר הדבר נחוץ.",
        "הרשאות המערכת שולטות בגישה. סירוב למיקום עלול להגביל פונקציות תלויות מיקום; היכן שניתן אפשר להזין מיקום ידנית. Saiqi אינה משתמשת במיקום לפרסום שאינו קשור ואינה מוכרת נתוני מיקום מדויקים.",
      ],
    },
    {
      title: "8. מקורות המידע",
      paragraphs: [
        "Saiqi מקבלת מידע ישירות מבעלי החשבון; מ-Firebase ומשירותי המכשיר; מנוסעים, נהגים וחברות המשתתפים בנסיעה; מספקי מיקום, מפות, התראות ותקשורת; ומהליכי תמיכה, תלונות, בטיחות, הונאה או רשות מוסמכת. Saiqi לא תאסוף בחשאי מידע אישי ממקורות בלתי קשורים.",
      ],
    },
    {
      title: "9. מטרות ובסיס משפטי",
      paragraphs: [
        "Saiqi מעבדת מידע כדי לספק ולאבטח את הפלטפורמה, לאמת חשבונות וזכאות, לתאם נסיעות, להפעיל מיקום והתראות, לתקשר, לחשב ולהציג רשומות נסיעה וכספים, לנהל דירוגים, לספק תמיכה, לחקור אירועים, לאכוף הסכמים, למנוע הונאה ושימוש לרעה, לציית לדין ולבסס, לממש או להגן על תביעות משפטיות.",
        "כאשר הדין דורש בסיס משפטי, העיבוד עשוי להסתמך על ביצוע חוזה, חובה חוקית, הגנת אינטרסים חיוניים, אינטרס לגיטימי המאוזן מול זכויות הפרט או הסכמה. ניתן לבטל הסכמה לעיבוד עתידי המבוסס עליה מבלי לפגוע בעיבוד קודם שנעשה כדין.",
      ],
    },
    {
      title: "10. שיתוף מידע",
      paragraphs: [
        "מידע ישותף רק במידה הנדרשת עם הנוסע, הנהג והחברה המעורבים בנסיעה; אנשי חברה מורשים; ספקי אחסון, אימות, מפות, התראות, אנליטיקה, תקשורת, אחסון נתונים, אבטחה ותמיכה; יועצים, מבטחים וספקי תשלום או בנק אם יתווספו; ורשויות מוסמכות כאשר הדבר נדרש כדין.",
        "Saiqi משתמשת בין היתר בשירותי Firebase/Google ובספקי מפות ותשתית. הספקים ייבחרו ויחויבו לעבד מידע רק למטרות מורשות ובהגנה זהה או שוות ערך לזו המתוארת במדיניות ובדין. Saiqi אינה מוכרת מידע אישי או מיקום מדויק.",
      ],
    },
    {
      title: "11. שמירה, מחיקה והחזקה משפטית",
      paragraphs: [
        "מידע של פרופיל פעיל נשמר כל עוד הוא נדרש להפעלת התפקיד. מיקום נוכחי, נוכחות, אסימוני מכשיר, הצעות ממתינות ומידע תפעולי דומה יימחקו או יפקעו כשאינם נחוצים, בכפוף לגיבויים ולדרישות חוק. רשומות של נסיעות שהושלמו, דירוגים, תלונות, בטיחות, חשבונאות, עמלות, הונאה ומחלוקות עשויות להישמר בצורה מזוהה, מוגבלת-גישה או אנונימית לתקופות חוקיות מתועדות.",
        "כאשר מחיקת נוסע או נהג מתקבלת, מוסרת הגישה הרגילה והמידע המתאים נמחק או עובר אנונימיזציה. לפני כן ניתן להעביר מידע זהות מוגבל לארכיון משפטי מוצפן ומוגבל גישה למשך עד 365 ימים לצורך תביעות, מחלוקות, בטיחות, מניעת הונאה וצווים חוקיים. החזקה משפטית מתועדת יכולה לדחות מחיקה רק לזמן הנדרש כדין.",
        "בקשת מחיקת חברה כוללת תקופת ביטול של 14 ימים עם הגבלות תפעוליות מיידיות. לאחר מחיקה סופית נשמר ארכיון משפטי מוצפן מוגבל למשך עד שנה, בכפוף להחזקה משפטית. רשומות מוניטין פסבדונימיות נפרדות של נהג וחברה עשויות להישמר לתקופת בטיחות ומניעת הונאה מתועדת שאושרה משפטית; הן אינן משחזרות פרופיל אישי שנמחק.",
      ],
    },
    {
      title: "12. מחיקת חשבון וחזרה",
      paragraphs: [
        "מחיקת חשבון זמינה בהגדרות התפקיד הרלוונטי. המחיקה עשויה להמתין עד שנסיעה שאושרה, ממתינה או מתבצעת תושלם בבטחה או תבוטל כדין. מחיקת תפקיד אינה מוחקת תפקיד פעיל אחר תחת אותה זהות אימות, וזהות Firebase תימחק רק כשאין תפקיד פעיל אחר הזקוק לה.",
        "נהג או חברה החוזרים לפלטפורמה חייבים לעבור אימות ובדיקה חדשים. Saiqi יוצרת פרופיל תפעולי חדש לפי הצורך ומקשרת אליו רק את נושא המוניטין השמור; מידע הפרופיל שנמחק אינו משוחזר. מחיקה אינה מאפסת דירוגים, תלונות, יתרות, החלטות הונאה או הגבלות בטיחות.",
      ],
    },
    {
      title: "13. אבטחה וגישה לארכיון",
      paragraphs: [
        "Saiqi משתמשת בבקרות גישה, הרשאות תפקיד, אבטחת תעבורה, סודות ייצור מוגבלים, הצפנת ארכיונים משפטיים, ערכי חיפוש מופרדי-תחום מבוססי מפתח, יומני ביקורת וניטור תפעולי. אין מערכת מאובטחת לחלוטין, אך Saiqi תשמור על אמצעים המתאימים לאופי המידע ולסיכון.",
        "לארכיון משפטי מוצפן רשאים לגשת רק בעלי הרשאה מפורשת, עבור תיק מתועד, סיבה חוקית והשדות הנחוצים. כל גישה והחלטה יתועדו. מידע לא יימסר רק משום שמישהו ביקש אותו; נדרש בסיס חוקי או צו תקף לפי העניין.",
      ],
    },
    {
      title: "14. עיבוד בינלאומי",
      paragraphs: [
        "ספקי ענן, אימות, מפות, התראות ותמיכה עשויים לעבד מידע במדינות אחרות ממדינת בעל החשבון. Saiqi תשתמש באמצעים חוזיים, ארגוניים ומשפטיים מתאימים כאשר הדבר נדרש ותתאר ספקים מהותיים ומנגנוני העברה ברשומות העיבוד הציבוריות שלה.",
      ],
    },
    {
      title: "15. הבחירות והזכויות שלך",
      paragraphs: [
        "בהתאם לדין ניתן לבקש עיון, תיקון, מחיקה, הגבלה, התנגדות, ניידות, ביטול הסכמה או בחינה של החלטה מהותית בנושא בטיחות, הונאה, דירוג או חשבון. יש לאמת זהות באופן סביר לפני מילוי בקשה. ניתן להגביל בקשה כאשר שמירה נדרשת לזכויות אדם אחר, בטיחות, נסיעה או יתרה שלא הוסדרו, מניעת הונאה, חובה חוקית או תביעה משפטית.",
        "ניתן לשנות הרשאות מכשיר בהגדרות המערכת. הודעות שיווקיות, אם יתווספו, יכללו אפשרות הסרה. בקשות פרטיות יישלחו לפי פרטי הקשר בסעיף 1, וניתן להגיש תלונה לרשות פרטיות או פיקוח מוסמכת כאשר הדין מעניק זכות זו.",
      ],
    },
    {
      title: "16. ילדים",
      paragraphs: [
        "Saiqi אינה מיועדת לילדים שאינם רשאים כדין להחזיק חשבון או להתקשר בהסכם. נסיעה עבור קטין חייבת להיות מוזמנת בידי מבוגר מורשה ובהתאם לדין ולכללי הבטיחות. אם יתברר שנאסף מידע של ילד שלא כדין, Saiqi תגביל ותמחק אותו כנדרש.",
      ],
    },
    {
      title: "17. שינויים במדיניות",
      paragraphs: [
        "Saiqi רשאית לעדכן מדיניות זו כאשר מוצרים, ספקים, דרישות משפטיות או נוהלי מידע משתנים. הגרסה ותאריך התחילה הנוכחיים יוצגו. שינויים מהותיים יימסרו בפלטפורמה או בערוץ קשר מתאים, והסכמה חדשה תתבקש כאשר הדין מחייב זאת.",
      ],
    },
  ],
};

window.SAIQI_PRIVACY = {
  version: PRIVACY_POLICY_VERSION,
  effectiveDate: PRIVACY_POLICY_EFFECTIVE_DATE,
  policies: { en, ar, he },
};

