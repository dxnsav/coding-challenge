const getAddressTitle = (address: string): string => {
  const path = document.location.href;

  return address.split('/').pop() || '';
};

export default getAddressTitle;