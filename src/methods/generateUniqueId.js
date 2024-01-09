const generateUniqueId = () => {
  const randomValue = Math.random().toString(36).substring(2);
  const timestamp = Date.now().toString(36);
  const uniqueId = `${timestamp}-${randomValue}`;
  return uniqueId;
};

export default generateUniqueId;