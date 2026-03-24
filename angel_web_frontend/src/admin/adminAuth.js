import { ADMIN_EMAIL, ADMIN_PASSWORD } from './adminAuthConfig';

const STORAGE_KEY = 'angel_admin_auth';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function isAdminAuthenticated() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;

  const data = safeParse(raw);
  if (!data?.expiresAt) return false;

  return Number(data.expiresAt) > Date.now();
}

export function getAdminEmail() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  const data = safeParse(raw);
  if (!data?.expiresAt) return null;
  if (Number(data.expiresAt) <= Date.now()) return null;

  return typeof data.email === 'string' ? data.email : null;
}

export function getAdminInitials() {
  const email = getAdminEmail();
  if (!email) return 'AU';

  const namePart = email.split('@')[0] ?? '';
  const clean = namePart.replace(/[^a-zA-Z0-9]/g, '').trim();
  const first = clean[0] ?? 'A';
  const last = clean.length > 1 ? clean[clean.length - 1] : 'U';
  return `${first}${last}`.toUpperCase();
}

export function loginAdmin({ email, password }) {
  const normalizedEmail = String(email ?? '').trim().toLowerCase();
  const normalizedExpected = String(ADMIN_EMAIL ?? '').trim().toLowerCase();

  const ok =
    normalizedEmail === normalizedExpected &&
    String(password ?? '') === String(ADMIN_PASSWORD ?? '');

  if (!ok) return { ok: false, message: 'Invalid email or password' };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: normalizedEmail,
      expiresAt: Date.now() + SESSION_TTL_MS,
    }),
  );

  return { ok: true };
}

export function logoutAdmin() {
  localStorage.removeItem(STORAGE_KEY);
}

