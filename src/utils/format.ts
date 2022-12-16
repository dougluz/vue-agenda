export const formatPhoneNumber = (phoneNumber: string | undefined) => {
  if (!phoneNumber) return "";
  const phone = phoneNumber.replace(/\D/g, "");
  const phoneLength = phone.length;

  if (phoneLength < 11) {
    return phone.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  }

  return phone.replace(/(\d{2})(\d{1})(\d{4,5})(\d{4})/, "($1) $2 $3-$4");
};
