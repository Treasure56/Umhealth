export const paths = {
  home: "/",
  about: "/about",
  login: "/login",
  register: "/register",
  user: "/user",
  consultations: "/user/consultations",
  contactDoctor: "/user/contact-doctor",
  notifications: "/user/notifications",
  profile: "/user/profile",
  message: (slug: string) => `/user/contact-doctor/${slug}`,
};
