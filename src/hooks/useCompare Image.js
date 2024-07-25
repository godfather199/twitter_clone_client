import { useEffect, useState } from "react";

function useCompareImage(url) {
  const [imageData, setImageData] = useState('')
  
  const imageUrlToBase64 = async (url) => {
    const data = await fetch(url);

    const blob = await data.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(blob);
      
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
      
      reader.onerror = reject;
    });
  };

  useEffect(() => {
    if (url) {
      imageUrlToBase64(url).then((data) => setImageData(data));
    }
  }, []);


  return {
    imageData
  }
}

export default useCompareImage;
