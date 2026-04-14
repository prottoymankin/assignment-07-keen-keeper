export const formatDate = (dateString) => {
  const formattedDate = new Date(dateString).toLocaleDateString('en-Us', {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return formattedDate;
}