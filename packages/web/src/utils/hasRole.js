export default function hasRole(role, user) {
  if (!role || !user) {
    return false;
  }

  const originalRoles = Array.isArray(role) ? role : [role];
  const roles = originalRoles.map(originalRole =>
    String(originalRole).toUpperCase(),
  );

  return user.roles
    .map(inRole => String(inRole).toUpperCase())
    .some(item => roles.includes(item));
}
