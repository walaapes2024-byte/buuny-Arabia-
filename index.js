import { metro } from "@vendetta";

export default {
    onLoad: () => {
        const i18n = metro.findByProps("Messages", "getLocale");
        if (i18n && i18n.Messages) {
            const arabicTranslation = {
                "SETTINGS": "الإعدادات",
                "USER_SETTINGS": "إعدادات المستخدم",
                "FRIENDS": "الأصدقاء",
                "DIRECT_MESSAGES": "الرسائل الخاصة",
                "CHANNELS": "القنوات",
                "SERVERS": "السيرفرات",
                "LOG_IN": "تسجيل الدخول",
                "REGISTER": "إنشاء حساب",
                "LOGOUT": "تسجيل الخروج",
                "NOTIFICATIONS": "الإشعارات",
                "MESSAGES": "الرسائل",
                "SEARCH": "بحث"
            };
            Object.keys(arabicTranslation).forEach((key) => {
                if (i18n.Messages[key]) {
                    i18n.Messages[key] = arabicTranslation[key];
                }
            });
        }
    },
    onUnload: () => {
        console.log("تم إيقاف بلقن التعريب.");
    }
};
