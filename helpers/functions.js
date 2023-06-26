function generateUniqueId() {
    const timestamp = Date.now();
    const uniqueValue = Math.random().toString(36).substr(2, 5); // Valor aleatorio único
    const uniqueId = `${timestamp}-${uniqueValue}`;
    return uniqueId;
  }
  
  export {generateUniqueId}